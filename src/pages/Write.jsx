import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

export default function Write() {
  const [value, setValue] = useState('');

  return (
    <div>
      <Header />
      <div className='write'>
        <div className='content'>
          <input placeholder='Title' />
          <div className='editorContainer'>
            <ReactQuill
              className='editor'
              theme='snow'
              value={value}
              onChange={setValue}
            />
          </div>
        </div>
        <div className='menu'>
          <div className='item'>
            <h1>Publish</h1>
            <span>
              <b>Status:</b> Draft
            </span>
            <span>
              <b>Visibility:</b> Public
            </span>
            <input style={{ display: 'none' }} type='file' id='file' name='' />
            <label className='file' htmlFor='file'>
              Upload Image
            </label>
            <div className='buttons'>
              <button>Save as a draft</button>
              <button>Update</button>
            </div>
          </div>
          <div className='item'>
            <h1>Category</h1>
            <div className='cat'>
              <input type='radio' name='cat' value='art' id='art' />
              <label htmlFor='art'>Art</label>
            </div>
            <div className='cat'>
              <input type='radio' name='cat' value='science' id='science' />
              <label htmlFor='science'>Science</label>
            </div>
            <div className='cat'>
              <input
                type='radio'
                name='cat'
                value='technology'
                id='technology'
              />
              <label htmlFor='technology'>Technology</label>
            </div>
            <div className='cat'>
              <input type='radio' name='cat' value='cinema' id='cinema' />
              <label htmlFor='cinema'>Cinema</label>
            </div>
            <div className='cat'>
              <input type='radio' name='cat' value='design' id='design' />
              <label htmlFor='design'>Design</label>
            </div>
            <div className='cat'>
              <input type='radio' name='cat' value='food' id='food' />
              <label htmlFor='food'>Food</label>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
