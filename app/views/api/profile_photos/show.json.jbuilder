  json.extract! profile_photo, :id, :profile_id, :photo_type
  debugger
  json.photoUrl url_for(profile_photo.profile_avatar || profile_photo.profile_banner)

  <ActionController::Parameters {
    "photo_type"=>"profile_avatar", "profile_photo"=><ActionController::Parameters {"profile_avatar"=>#<ActionDispatch::Http::UploadedFile:0x00007f9e85fbe840 @tempfile=#<Tempfile:/var/folders/wn/5wwbf_fx6k554zw_nvgkvr3m0000gn/T/RackMultipart20220427-67835-sg3y1m.png>, @original_filename="CleanShot 2022-04-17 at 19.32.00.png", @content_type="image/png", @headers="Content-Disposition: form-data; name=\"profile_photo[profile_avatar]\"; filename=\"CleanShot 2022-04-17 at 19.32.00.png\"\r\nContent-Type: image/png\r\n">} permitted: false>, "format"=>:json, "controller"=>"api/profile_photos", "action"=>"create"} permitted: false>