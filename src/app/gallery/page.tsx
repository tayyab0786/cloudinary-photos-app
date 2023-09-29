"use client"

import { CldUploadButton } from "next-cloudinary";
import {UploadResult} from "../page"
import { Button } from "@/components/ui/button";

export default function GalleryPage() {
    return <section>
        <div className="flex justify-between">
        <h1 className="text-4xl font-bold">GALLERY</h1>
        <Button asChild>
        <CldUploadButton
      onUpload = {( result) => {
       
       const uploadResult = result as UploadResult;
      // setImageID(uploadResult.info.public_id);

     

     } }
    
     uploadPreset="ssi6uxaf" />
     </Button>
            </div>
            
    </section>
}

