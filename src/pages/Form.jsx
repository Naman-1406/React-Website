import { useState } from "react";
import { useForm } from "react-hook-form";

const Form = () => {
  const { register, handleSubmit, formState: { errors }, reset} = useForm()
  const [user, setuser] = useState([])
  const [editIndex , setIndex]=useState(null)

  function savedata(data) {
    console.log(data);
    if (editIndex != null){
        const updateUser =[...user]
        updateUser [editIndex]=data;
        setuser (updateUser)
        setIndex (null)
    }
    else{

    setuser([...user, data])
    }
    reset()

    
}
console.log(user);

  return (
    <>
    <div className="container contactus pt-5 bg-
Secondary">
      <h1 className="text-center">Contact Us</h1>
      <div className="row pt-5 content">
        <div className="col-4">
        <i class="fa-solid fa-location-dot"></i>
        <p className="text-center pt-3">203 Fake St. Mountain View, San Francisco,<br /> California, USA</p>
        </div>
        <div className="col-4">
        <i class="fa-solid fa-phone"></i>
        <p className="text-center pt-3 ms-1 text-primary">+1 232 3235 324</p>
        </div>
        <div className="col-4">
        <i class="fa-regular fa-envelope"></i>
        <p className="text-center pt-3 text-primary ms-1">youremail@domain.com</p>
        </div>
      </div>
      <div className="container contact shadow">
        <form action="#" className=" bg-white col-8 mx-auto my-5 p-5" onSubmit={handleSubmit(savedata)}>

          <h2 className="h4 text-black mb-5">Contact Form</h2>

          <div className="row mx-0 form-group mx-0">
            <div className="col-lg-6 mb-3 mb-md-0">
              <label className="text-black" for="fname">First Name</label>
              <input type="text" id="fname" className="form-control rounded-pill" {...register('firstname',
                        {
                            required: {
                                value: true,
                                message: "enter firstname"
                            },
                            maxLength: {
                                value: 30,
                                message: "max 30 character"
                            },
                        }
                    )}   
              />
              <p>{errors?.firstname?.message}</p>
            </div>
            <div className="col-lg-6">
              <label className="text-black" for="lname">Last Name</label>
              <input type="text" id="lname" className="form-control rounded-pill" 
              {...register('lastname',
                {
                    required: {
                        value: true,
                        message: "enter your lastname"
                    },
                    maxLength: {
                        value: 30,
                        message: "max 30 character"
                    },
                    minLength: {
                        value: 4,
                        message: "must be 4 character"
                    },
                }
            )}   
      />
      <p>{errors?.lastname?.message}</p>
            </div>
          </div>

          <div className="row mx-0 form-group mx-0">

            <div className="col-lg-12">
              <label className="text-black" for="email">Email</label>
              <input type="email" id="email" className="form-control rounded-pill"
              
              {...register('email',
                {
                    required: {
                        value: true,
                        message: "enter your email id"
                    },
                    maxLength: {
                        value: 30,
                        message: "max 30 character"
                    },
                    minLength: {
                        value: 4,
                        message: "must be 4 character"
                    },
                }
            )}   
      />
      <p>{errors?.email?.message}</p>
              
            </div>
          </div>

          <div className="row mx-0 form-group">

            <div className="col-lg-12">
              <label className="text-black" for="subject">Subject</label>
              <input type="subject" id="subject" className="form-control rounded-pill" 
              
              {...register('subject',
                {
                    required: {
                        value: true,
                        message: "enter your subject"
                    },
                    maxLength: {
                        value: 30,
                        message: "max 30 character"
                    },
                    minLength: {
                        value: 4,
                        message: "must be 4 character"
                    },
                }
            )}  
              />
      <p>{errors?.subject?.message}</p>

            </div>
          </div>

          <div className="row mx-0 form-group">
            <div className="col-lg-12">
              <label className="text-black" for="message">Message</label>
              <textarea name="message" id="message" cols="30" rows="7" className="form-control rounded-pill"
              
              {...register('message',
                {
                    required: {
                        value: true,
                        message: "enter your message"
                    },
                    maxLength: {
                        value: 30,
                        message: "max 30 character"
                    },
                    minLength: {
                        value: 4,
                        message: "must be 4 character"
                    },
                }
            )}   
              placeholder="Write your notes or questions here..."></textarea>
      <p>{errors?.message?.message}</p>

            </div>
          </div>

          <div className="row mx-0 form-group">
            <div className="col-lg-12">
              <input type="submit" value="Send Message" className="btn btn-primary btn-md text-white rounded-pill" />
            </div>
          </div>


        </form>
      </div>
      </div>
    </>
  )
}
export default Form