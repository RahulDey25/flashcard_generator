// Importing essential React hooks and components from the React library for managing component lifecycle and state
import React, { useEffect, useState } from "react";
// Importing social media share buttons and icons from the react-share library for easy integration and customization
import { TwitterShareButton, WhatsappShareButton, EmailShareButton, FacebookShareButton, LinkedinShareButton } from 'react-share';
// Importing Button and Modal components from react-daisyui for streamlined UI development and interaction handling
import { Button, Modal } from "react-daisyui";
// Importing icons from various libraries for versatile and visually appealing graphical elements
import { IoMdClose } from "react-icons/io";
import { BsShare } from "react-icons/bs";
import { TbCopy } from "react-icons/tb";
// Importing local image assets for use in the application, ensuring fast loading and offline accessibility
import Twitter from "../../../Assets/twitter-icon.svg";
import LinkedIn from "../../../Assets/linkedin-icon.svg";
import Mail from "../../../Assets/mail-icon.svg";
import CopyToClipboard from "react-copy-to-clipboard";
import Whatsapp from "../../../Assets/whatsapp-icon.svg";
import Facebook from "../../../Assets/facebook-icon.svg";

// Functional component defining the ShareModal for displaying social media share options
const ShareModal = ({ isOpen, closeModal }) => {
 // Retrieving the current URL for use in sharing functionalities
    const url = window.location.href;

    // State variable for tracking whether the link has been copied to the clipboard
    const [isCopied, setIsCopied] = useState(false);

    // useEffect hook to reset the isCopied state after a specified duration
    useEffect(() => {
        isCopied &&
            setTimeout(() => {setIsCopied(false)}, 2000)}, [isCopied]);

    return (
        // Container div to wrap the modal component
        <div>
            <div className={isOpen ? 'shareModel' : ''}>
                {/* Modal component specifically designed for sharing functionality */}
                <Modal open={isOpen} onClickBackdrop={closeModal} dataTheme="light" className="m-2">

                    {/* Modal header */}
                    <Modal.Header className="font-bold">Share</Modal.Header>
                    {/* Modal body */}
                    <Modal.Body>
                        {/* Container for modal content */}
                        <div className="m-5 flex flex-col ">
                            {/* Close button for the modal */}
                            <Button
                                size="sm"
                                shape="circle"
                                className="bg-absolute right-2 top-2 bg-white border-none text-slate-700 text-2xl font-bold shadow-lg"
                                onClick={() => {
                                    setIsCopied(false);
                                    closeModal();
                                }}>
                                {/* Close icon */}
                                <IoMdClose
                                    onClick={closeModal}
                                    className="absolute text-slate-500 right-3 top-3 text-2xl cursor-pointer"/>
                            </Button>

                            {/* Container for link, copy button, and share button */}
                            <div className="flex items-center space-x-3 ">
                                {/* Rendering the current URL to be shared */}
                                <p className="flex items-center flex-1 border-2 p-2 text-xs text-slate-500 border-slate-300 rounded-md border-dashed">
                                    Link:
                                    <span className="mx-2 font-semibold text-xs overflow-x-hidden text-black">
                                        {url}
                                    </span>
                                </p>

                                {/* Button component for copying the content to the clipboard */}
                                <CopyToClipboard text={url} onCopy={() => setIsCopied(true)}>
                                    <TbCopy className="text-xl text-slate-500 scale-x-[-1] cursor-pointer" />
                                </CopyToClipboard>

                                {/* Share button */}
                                <BsShare className="text-xl text-slate-500 cursor-pointer" />
                            </div>
                            {/* Displaying a message when the link is successfully copied to the clipboard */}
                            <h2 className="p-2 h-5 ml-3 text-md text-green-500 font-semibold">
                                {isCopied && "Link copied to clipboard"}
                            </h2>
                            {/* Container element for organizing social media share buttons */}
                            <div className="mt-6 flex items-center space-x-10 justify-center">
                                {/* Whatsapp share button */}
                                <WhatsappShareButton url="https://web.whatsapp.com/">
                                    <img
                                        src={Whatsapp}
                                        alt="Whatsapp"
                                        className="w-10 p-2 bg-slate-100 rounded-lg cursor-pointer"/>
                                </WhatsappShareButton>

                                {/* Facebook share button */}
                                <FacebookShareButton url="https://www.facebook.com/">
                                    <img
                                        src={Facebook}
                                        alt="facebook"
                                        className="w-10 p-2 bg-slate-100 rounded-lg cursor-pointer"/>
                                </FacebookShareButton>

                                {/* Twitter share button */}
                                <TwitterShareButton url="https://twitter.com/">
                                    <img
                                        src={Twitter}
                                        alt="Twitter"
                                        className="w-10 p-2 bg-slate-100 rounded-lg cursor-pointer"/>
                                </TwitterShareButton>

                                {/* LinkedIn share button */}
                                <LinkedinShareButton url="https://www.linkedin.com/">
                                    <img
                                        src={LinkedIn}
                                        alt="Linkedin"
                                        className="w-10 p-2 bg-slate-100 rounded-lg cursor-pointer"/>
                                </LinkedinShareButton>

                                {/* Email share button */}
                                <EmailShareButton url="https://www.gmail.com/">
                                    <img
                                        src={Mail}
                                        alt="Mail"
                                        className="w-10 p-2 bg-slate-100 rounded-lg cursor-pointer"/>
                                </EmailShareButton>
                            
                            </div>
                        </div>
                    </Modal.Body>
                </Modal>
            </div>
        </div>
    );
}

// exporting the default ShareModal component
export default ShareModal;
