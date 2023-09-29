"use client";
import Image from 'next/image'
import { CldUploadButton } from 'next-cloudinary';
import { CldImage } from 'next-cloudinary';
import { useState } from 'react';
export type UploadResult = {
   info: {
     public_id:string;
   };
   event:"success";
 };

export default function Home() {
   const[imageId, setImageID] = useState("");
  // function setImageID(public_id: any) {
  //   throw new Error('Function not implemented.');
  // }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
     <CldUploadButton
      onUpload = {( result) => {
       
       const uploadResult = result as UploadResult;
       setImageID(uploadResult.info.public_id);

     

     } }
    
     uploadPreset="ssi6uxaf" />
  
  {imageId && (
     <CldImage
  width="960"
  height="600"
  src={imageId}
  sizes="100vw"
  alt="Description of my image"/>
)}
    </main>
  );
}
