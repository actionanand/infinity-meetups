<script>
  import { createEventDispatcher } from 'svelte';

  import TextInput from '../UI/TextInput.svelte';
  import Button from '../UI/Button.svelte';
  import Modal from '../UI/Modal.svelte';

  import { isEmpty, isValidEmail } from '../helpers/validation.js';

  let title = '';
  let subtitle = '';
  let url = '';
  let address = '';
  let desc = '';
  let email = '';

  $: isTitleValid = !isEmpty(title, 3);
  $: isSubtitleValid = !isEmpty(subtitle, 3);
  $: isUrlValid = !isEmpty(url, 5);
  $: isAddressValid = !isEmpty(address, 10);
  $: isDescValid = !isEmpty(desc, 5);
  $: isEmailValid = isValidEmail(email);
  $: isFormValid = isTitleValid && isSubtitleValid && isUrlValid && isAddressValid && isDescValid & isEmailValid;

  const dispatch = createEventDispatcher();

  function submitForm() {
    dispatch('save-form-data', {
      title,
      subtitle,
      url,
      address,
      desc,
      email
    });
  }

  function onCancel() {
    dispatch('cancel');
  }
</script>

<style>
  form {
    width: 100%;
    /* max-width: 90%;
    margin: auto; */
  }
</style>

<Modal title="Edit Meetup Data" on:cancel>
  <form on:submit|preventDefault="{submitForm}">
    <TextInput 
      id="title" 
      label="Title" 
      value="{title}" 
      valid="{isTitleValid}"
      validityMessage="Please enter a valid title"
      on:input="{(event) => (title = event.target.value)}" 
      placeholder="Your title goes here"/>

    <TextInput 
      id="subtitle" 
      label="Subtitle" 
      value="{subtitle}" 
      valid="{isSubtitleValid}"
      validityMessage="Please enter a valid subtitle"
      on:input="{(event) => (subtitle = event.target.value)}" 
      placeholder="Your subtitle goes here"/>
    
    <TextInput 
      id="description" 
      label="Description" 
      value="{desc}" 
      row="3"
      valid="{isDescValid}"
      validityMessage="Please enter a valid description"
      controlType="textarea"
      on:input="{(event) => (desc = event.target.value)}" 
      placeholder="Please add some description"/>
    
    <TextInput 
      id="imageUrl" 
      label="imageUrl" 
      value="{url}" 
      type="url"
      valid="{isUrlValid}"
      validityMessage="Please enter a valid image url"
      on:input="{(event) => (url = event.target.value)}" 
      placeholder="Please add image url"/>
    
    <TextInput 
      id="address" 
      label="Address" 
      value="{address}" 
      row="3"
      valid="{isAddressValid}"
      validityMessage="Please enter a valid address"
      controlType="textarea"
      on:input="{(event) => (address = event.target.value)}" 
      placeholder="Your address goes here"/>
    
    <TextInput 
      id="email" 
      label="email" 
      value="{email}" 
      type="email"
      valid="{isEmailValid}"
      validityMessage="Please enter a valid email"
      on:input="{(event) => (email = event.target.value)}" 
      placeholder="Your e-mail Id goes here"/>
  </form>
  <div slot="footer">
    <Button type="submit" mode="outline" on:click="{onCancel}" >Cancel</Button>
    <Button type="submit" on:click="{submitForm}" disabled="{!isFormValid}" >Save</Button>
  </div>
</Modal>