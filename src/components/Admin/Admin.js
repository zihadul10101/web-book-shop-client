import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from "react-hook-form";

const Admin = () => {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const [imageUrl, setImageUrl] = useState(null);

  const onSubmit = data => {
    const bookData = {
      name: data.name,
      imageUrl: imageUrl,
      price: data.price
    };
    const url = `http://localhost:6060/addBook`;

    console.log(bookData);
    fetch(url, {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(bookData)
    })
      .then(res => console.log('server side response', res))

  };

  const handleImageUpload = (event) => {
    console.log(event.target.files);
    const imageData = new FormData();
    imageData.set('key', '169c06cd08fc190c1c2dee2a05effaf1')
    imageData.append('image', event.target.files[0])

    axios.post('https://api.imgbb.com/1/upload',
      imageData)
      .then(function (response) {
        // console.log(response.data.data.delete_url);
        setImageUrl(response.data.data.display_url);
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  return (
    <div className="mt-5 pt-5">

      {/* <h3>Add Book</h3>
      <form onSubmit={handleSubmit(onSubmit)}>
        Add book Name:
                <input name="name" type="text" placeholder="web-book" ref={register} />
        <br />
        <br />
                Add image:
                <input name="image" type="file" onChange={handleImageUpload} />
        <br />
        <br />
                Add Price:
                <input name="price" placeholder="price" type="text" ref={register} />
        <br />
        <br />

        <button type="submit">submit</button>
      </form> */}




      <div id="list-example" class="list-group">
  <a class="list-group-item list-group-item-action" href="#list-item-1">Add Book</a>
  <a class="list-group-item list-group-item-action" href="#list-item-2">Manage Book</a>
  
</div>
<div data-bs-spy="scroll" data-bs-target="#list-example" data-bs-offset="0" class="scrollspy-example" tabindex="0">
  <h4 id="list-item-1">Add Book</h4>
  <p>
      <form onSubmit={handleSubmit(onSubmit)}>
        Add book Name:
                <input name="name" type="text" placeholder="web-book" ref={register} />
        <br />
        <br />
                Add image:
                <input name="image" type="file" onChange={handleImageUpload} />
        <br />
        <br />
                Add Price:
                <input name="price" placeholder="price" type="text" ref={register} />
        <br />
        <br />

        <button type="submit">submit</button>
      </form></p>
  <h4 id="list-item-2">Item 2</h4>
  <p>...</p>
  
</div>
    </div>
  );
};

export default Admin;