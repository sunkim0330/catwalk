import React from 'react';

//this is for only 'Add Answer' form part. It is not mandatory but propbably good to include in my component.
//going to work on it after all my other functions are working


// const FileUploader = ({onFileSelect,}) => {
// const [file, setFile] = useState(null);
// const handleFileInput = (e) => {
//   setFile(URL.createObjectURL(e.target.files[0]));
// };

// const displayImage = () => {
//   if (isItAnswer) {
//     return (
//       <div>
//         <label>Upload Images: </label>
//         <input type="file"
//           value={file}
//           onChange={handleFileInput}
//         />

//       </div>
//     );
//   } else {
//     return null;
//   }
// };

//   const fileInput = useRef(null);

//   const handleFileInput = (e) => {
//     const fileUpload = e.target.files[0];
//     if (fileUpload.length > 5) {
//       onFileSelectError({ error: 'You can upload up to 5 images'});
//     } else {
//       onFileSelectSuccess(fileUpload);
//     }
//   };

//   return (
//     <div>
//       <input type="file" onChange={handleFileInput}/>
//       <button onClick={e => fileInput.current && fileInput.current.click()} className="file-select-button"></button>
//     </div>
//   );
// };

