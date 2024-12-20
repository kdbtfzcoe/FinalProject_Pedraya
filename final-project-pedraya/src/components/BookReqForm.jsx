import  "./BookReqForm.css";
import React, { useState } from "react";

const BookReqForm = () => {
    const [formData, setFormData] = useState({

        name: "",
        age: "",
        email: "",
        contactNumber: "",
        address: "",
        bookGenre: "",
        bookTitle: "",
        bookAuthor: "",
        yearOfPublication: "",

    });

    const handleChange = (e) => {
        const{name, value} = e.target;
        setFormData({
            ...formData,
            [name]:value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!formData.bookGenre && !formData.bookTitle && !formData.bookAuthor && !formData.yearOfPublication){
            alert("Please fill out book details before submitting");
            return;
        }

        console.log("Form Data Submitted: ", formData);

        setFormData({
            name: "",
            age: "",
            email: "",
            contactNumber: "",
            address: "",
            bookGenre: "",
            bookTitle: "",
            bookAuthor: "",
            yearOfPublication: "",
        });
    };

return (
    <div className="form-container">
        <div className="form-card">
            <h1>Book Request Form</h1>
            <p>Fill out the details below to request your desired book</p>
            <form onSubmit={handleSubmit}>

                {/* Name Input Field */}
                <div className="form-field">
                    <label htmlFor="name">Name</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        placeholder="Enter your full name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                </div>

                {/* Age Input Field */}
                <div className="form-field">
                    <label htmlFor="age">Age</label>
                    <input
                        type="number"
                        id="age"
                        name="age"
                        placeholder="Enter your age"
                        value={formData.age}
                        onChange={handleChange}
                        required
                    />
                </div>

                {/* Email Input Field */}
                <div className="form-field">
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="Enter your email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </div>

                {/* Contact Number Input Field */}
                <div className="form-field">
                    <label htmlFor="contactNumber">Contact Number</label>
                    <input
                        type="text"
                        id="contactNumber"
                        name="contactNumber"
                        placeholder="Enter your contact number"
                        value={formData.contactNumber}
                        onChange={handleChange}
                        required
                    />
                </div>

                {/* Address Input Field */}
                <div className="form-field">
                    <label htmlFor="address">Address</label>
                    <input
                        type="text"
                        id="address"
                        name="address"
                        placeholder="Enter your address"
                        value={formData.address}
                        onChange={handleChange}
                        required
                    />
                </div>

                {/* Book Genre Input Field */}
                <div className="form-field">
                    <label htmlFor="bookGenre">Book Genre</label>
                    <input
                        type="text"
                        id="bookGenre"
                        name="bookGenre"
                        placeholder="Enter the book genre"
                        value={formData.bookGenre}
                        onChange={handleChange}
                        required
                    />
                </div>

                {/* Book Title Input Field */}
                <div className="form-field">
                    <label htmlFor="bookTitle">Title of Book</label>
                    <input
                        type="text"
                        id="bookTitle"
                        name="bookTitle"
                        placeholder="Enter the title of the book"
                        value={formData.bookTitle}
                        onChange={handleChange}
                        required
                    />
                </div>

                {/* Book Author Input Field */}
                <div className="form-field">
                    <label htmlFor="bookAuthor">Author of Book</label>
                    <input
                        type="text"
                        id="bookAuthor"
                        name="bookAuthor"
                        placeholder="Enter the author of the book"
                        value={formData.bookAuthor}
                        onChange={handleChange}
                        required
                    />
                </div>

                {/* Year of Publication Input Field */}
                <div className="form-field">
                    <label htmlFor="yearOfPublication">Year of Publication</label>
                    <input
                        type="text"
                        id="yearOfPublication"
                        name="yearOfPublication"
                        placeholder="Enter the year of publication"
                        value={formData.yearOfPublication}
                        onChange={handleChange}
                        required
                    />
                </div>

                {/* Submit Button */}
                <button type="submit" className="Submit-Button">Submit</button>
            </form>
        </div>
    </div>
);
    
};

export default BookReqForm;