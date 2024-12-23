'use client';
import React, { useState,useEffect } from "react";
import * as Yup from 'yup';
import { Formik, Form } from 'formik';
import { IoCloseSharp } from 'react-icons/io5';
import Label from './LabelComponent';
import ErrorDynamic from './ErrorComponent';
import PasswordField from './PasswordField';
import Button from './ButtonComponentForAuth'; // Adjust the import path as needed
import { useResetPasswordMutation } from '@//redux/service/auth';
import { useRouter } from "next/navigation";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {useAppSelector } from '@//redux/hooks';

type ValueTypes = {
    new_password: string;
    confirm_password:string;
};

const initialValues: ValueTypes = {
    new_password: '',
    confirm_password: '',
};
const strongPasswordRegex = new RegExp("^(?=.*[A-Z])(?=.*[a-z])(?=.*[@#$%^&*]).{8,}$");
const validationSchema = Yup.object().shape({
    new_password: Yup.string()
     .min(8, "New Password is too short, At lease 8 characters")
    .matches(strongPasswordRegex, "New Password must contain at least one upper case English letter, one lower case English letter and one special character")
    .required("New Password is required"),
    confirm_password: Yup.string()
    .oneOf([Yup.ref("new_password")], "New Password must match")
    .required("Confirm password is required"),
});

const ResetPasswordComponent = () => {
    const email = useAppSelector((state) => state.verify.email); // Get email from Redux
    const reset_code = useAppSelector((state) => state.verify.reset_code); // Get reset code from Redux
    const [isLoading, setIsLoading] = useState(false);
    const [resetPassword] = useResetPasswordMutation(); // API call for resetting the password
    const router = useRouter();
    console.log("Email from Redux: ", email)
    console.log("Reset code from Redux: ", reset_code)
    useEffect(() => {
        if (!email || !reset_code) {
          console.error("Email or reset code is missing:", { email, reset_code });
          toast.error("Missing email or reset code. Redirecting to Forgot Password.");
          setTimeout(() => {
            router.push("/forgot-password");
          }, 3000);
        }
      }, [email, reset_code, router]);
      
    const hanldeResetPassword = async(values:ValueTypes)=>{
        if (!email || !reset_code) {
            toast.error("Missing email or reset code. Redirecting to Forgot Password.");
            router.push("/forgot-password");
            return;
          }

        setIsLoading(true);
        try{
            const { new_password, confirm_password } = values;
            // Call the reset password API
            const response = await resetPassword({ email, reset_code, new_password, confirm_password }).unwrap();
            toast.success(response.message || "Password reset successfully!");
            console.log("Password Reset Response:", response);
            // Redirect to login page
            setTimeout(() => {
            router.push("/login");
            });

        }catch(error){
            console.error("Reset Password Error:", error);
           
            if (error && typeof error === "object" && "status" in error && "data" in error) {
            const typedError = error as { status: number; data: { detail?: string; message?: string } };
            toast.error(typedError.data?.detail || "Failed to reset password. Please try again.");
            } else {
                toast.error("An unknown error occurred.");
            }
        }finally {
            setIsLoading(false);
          }
    }

  return (
    <section className="w-full h-screen flex justify-center items-center ">
        <div className='w-[90%] h-[90%] sm:w-[75%] sm:h-[90%] md:w-[95%] md:h-[90%] xl:w-[85%] xl:h-[68%] m-auto border-1 border border-slate-100 rounded-xl'>
            <div className="px-6 sm:px-8 md:px-6 xl:px-10">
                {/* <div className='flex justify-end mt-3'> */}
                <div className="right-9 top-5 sm:right-24 sm:top-5 md:right-5 md:top-3 lg:right-5 xl:right-20 absolute xl:top-32">
                    <button
                    className="text-2xl text-gray-500 hover:text-gray-700"
                    onClick={() => console.log('Close button clicked')}
                    >
                        <IoCloseSharp />
                    </button>
                </div>
                <div className="h-fit mt-10 md:mt-11 xl:mt-24">
                    <h1 className="text-4xl font-bold text-primary">បង្កើតពាក្យសម្ងាត់ថ្មី</h1>
                    <Formik
                        initialValues={initialValues}
                        validationSchema={validationSchema}
                        onSubmit={(values, { setSubmitting }) => {
                        hanldeResetPassword(values);
                        console.log('Form Submitted:', values);
                        setSubmitting(false); // Simulate a submission delay
                    }}
                    >
                    {({}) => (
                        <Form>
                            {/* Form For Register */}
                            <div className="space-y-6 mt-10">
                                {/* Password Field */}
                                <div>
                                    <Label htmlFor="new_password" text="New Password" required />
                                    <PasswordField
                                        name="new_password"
                                        id="new_password"
                                        placeholder="Input New Password"
                                        className="custom-class mt-1"
                                    />
                                    <ErrorDynamic  name="new_password" component="div" />
                                </div>

                                {/* Confirm Password Field */}
                                <div>
                                    <Label htmlFor="confirm_password" text="Confirm Password" required />
                                    <PasswordField
                                        name="confirm_password"
                                        id="confirm_password"
                                        placeholder="Input Confirm Password"
                                        className="custom-class mt-1"
                                    />
                                    <ErrorDynamic  name="confirm_password" component="div" />
                                </div>

                            </div>

                            {/* Submit Button */}
                            <div className="mt-8">
                                <Button
                                    type="submit"
                                    text="Chnage Password"
                                    isLoading={isLoading}
                                    className="w-full bg-primary hover:bg-primary text-white font-medium border-collapse"
                                />
                            </div>
                        </Form>
              
                    )}
           
                    </Formik>
                    <ToastContainer />
                </div>
            </div>
        </div>
      
    </section>
  );
};

export default ResetPasswordComponent;