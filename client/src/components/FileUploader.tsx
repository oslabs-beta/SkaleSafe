import React, { useState } from 'react';

const FileUploader = () => {
  const [file, setFile] = useState(null);

  const handleDrop = (e) => {
    e.preventDefault();
    const fileList = e.dataTransfer.files;
    if (fileList.length > 0) {
      setFile(fileList[0]);
    }
  };

  const handleUpload = () => {
    if (!file) {
      return;
    }

    const formData = new FormData();
    formData.append('file', file);

    // Send file to backend server
    fetch('http://localhost:3002/upload', {
      method: 'POST',
      body: formData,
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div
      onDrop={handleDrop}
      onDragOver={(e) => e.preventDefault()}
      className='flex mt-20 place-content-center items-center'
    >
      <input type='file' onChange={(e) => setFile(e.target.files[0])} />
      <button
        onClick={handleUpload}
        className='bg-blue-50 px-8 py-3 rounded-md text-lg border-blue-300 border-2 text-blue-800 hover:text-white hover:shadow-[inset_13rem_0_0_0] hover:shadow-blue-500 duration-[400ms,700ms] transition-[color,box-shadow]'
      >
        Upload
      </button>
    </div>
  );
};

export default FileUploader;
