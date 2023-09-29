"use client"
import './add.css'

import React, { useState } from 'react';

const AddProductPage = () => {
    const [title, setTitle] = useState('');
    const [category, setCategory] = useState('');
    const [description, setDescription] = useState('');
    const [mainImage, setMainImage] = useState(null);
    const [additionalImages, setAdditionalImages] = useState([]);

    const handleTitleChange = (e) => {
        setTitle(e.target.value);
    };

    const handleCategoryChange = (e) => {
        setCategory(e.target.value);
    };

    const handleDescriptionChange = (e) => {
        setDescription(e.target.value);
    };

    const handleMainImageChange = (e) => {
        setMainImage(e.target.files[0]);
    };

    const handleAdditionalImagesChange = (e) => {
        setAdditionalImages(Array.from(e.target.files));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Perform submission logic, such as sending data to the server
        console.log('Title:', title);
        console.log('Category:', category);
        console.log('Description:', description);
        console.log('Main Image:', mainImage);
        console.log('Additional Images:', additionalImages);
    };

    return (
        <div className="add-product-page">
            <h1>Add New Product</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Title:</label>
                    <input type="text" value={title} onChange={handleTitleChange} />
                </div>
                <div>
                    <label>Category:</label>
                    <select value={category} onChange={handleCategoryChange}>
                        <option value="">Select Category</option>
                        <option value="category1">Category 1</option>
                        <option value="category2">Category 2</option>
                        <option value="category3">Category 3</option>
                    </select>
                </div>
                <div>
                    <label>Description:</label>
                    <textarea value={description} onChange={handleDescriptionChange} />
                </div>
                <div>
                    <label>Main Image:</label>
                    <input type="file" onChange={handleMainImageChange} />
                </div>
                <div>
                    <label>Additional Images:</label>
                    <input type="file" multiple onChange={handleAdditionalImagesChange} />
                </div>
                <button type="submit">Add Product</button>
            </form>
        </div>
    );
};

export default AddProductPage;