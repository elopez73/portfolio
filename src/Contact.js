import React, { useState, useEffect } from 'react';
import Opening from './components/Opening';
import { Button, Dialog, Tooltip, IconButton, Snackbar,Divider } from '@mui/material';
import EmailSend from './components/EmailSend'
import Alert from '@mui/material/Alert';
import { contactInfo } from './staticData/ContactData';
function Contact() {
    const [open, setOpen] = useState(false);
    const [openCopy, setOpenCopy] = useState(false);
    const [res, showResult] = useState(false);
    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    useEffect(() => {
        // when the component is mounted, the alert is displayed for 3 seconds
        setTimeout(() => {
            showResult(false);
        }, 3000);
    }, [res]);
    function handleIconClick(items) {

        if (items.title === 'Linkedin')
        {
            window.open(items.info, '_blank', 'noopener,noreferrer');
        }
        else {
            navigator.clipboard.writeText(items.info);
            setOpenCopy(true)
        }
    }
    return (
        <section id="contact" className="flex flex-col min-h-fit gap-y-10 pb-10">
            <Opening Name="Contact" p1="Contact information" />
            <div className={`flex flex-col w-full gap-y-5`}>
                <div className='flex flex-row w-full justify-center gap-x-10'>
                    {contactInfo.map((items) => {

                        return (

                            <Tooltip title={items.title} >
                                <IconButton onClick={() => handleIconClick(items)} className={`w-[50px] h-[50px] `}>
                                    <img src={items.img} alt={items.title} />
                                </IconButton>
                            </Tooltip>
                        )
                    })}

                </div>
                <Divider/>
                <div className='flex w-full justify-center'>
                    <Button className={' text-white bg-green p-1'} onClick={handleClickOpen}>
                        Contact Form
                    </Button>
                </div>






                <Dialog PaperProps={{ className: 'bg-black ' }} open={open} onClose={handleClose}>

                    <EmailSend handleClose={handleClose} showResult={showResult} />
                </Dialog>

            </div>
            <Snackbar

                anchorOrigin={{ vertical: "top", horizontal: "center" }}
                autoHideDuration={2000}
                onClose={() => showResult(false)}
                open={res}
            ><Alert className='w-full ' severity="success">
                    Thank you for reaching out! I look forward to speaking with you soon.
            </Alert>
            </Snackbar>

            <Snackbar
                message="Copied to clibboard"
                anchorOrigin={{ vertical: "top", horizontal: "center" }}
                autoHideDuration={2000}
                onClose={() => setOpenCopy(false)}
                open={openCopy}
            />
        </section>
    );
}

export default Contact;
