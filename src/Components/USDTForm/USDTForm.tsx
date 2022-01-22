import React, { useState } from 'react'
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useHistory } from "react-router-dom";

interface IUSDTForm {
    showUsdtForm: boolean,
    handleUsdtClose: Function,
}

const USDTForm = (props: IUSDTForm) => {
    const [showId, setShowId] = useState<boolean>(false);
    const [transactionId, setTransactionId] = useState <string>('');
    const history = useHistory();

    const style = {
		position: 'absolute' as 'absolute',
		top: '50%',
		left: '50%',
		transform: 'translate(-50%, -50%)',
		width: 400,
		bgcolor: 'background.paper',
		border: '2px solid #000',
		boxShadow: 24,
		p: 4,
    };
    const handleClick = () => {
        if (!showId) {
            return setShowId(true);
        }
        if (transactionId === '') {
            return toast.error("Transaction Id is required");
        }
        if (transactionId !== '') {
            toast.info("ID received..Redirecting to whatsapp");
            props.handleUsdtClose(false);
            const win: any = window.open(`https://wa.me/2348027623156?text=Hello, I just made a payment to your USDT address. My Transaction Id is ${transactionId}`, "_blank");
            win.focus();
        }
    };
    return (
        <Modal
            open={props.showUsdtForm}
            onClose={() => props.handleUsdtClose(false)}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={style}>
                <Typography id="modal-modal-title" variant="h6" component="h2" sx={{textAlign: 'center'}}>
                Pay to the USDT address below
                </Typography>
                <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                    <TextField disabled id="filled-basic" label="USDT" value="1xbccshjahdhf7r47263xr3rtr3tr633ew" variant="filled" sx={{ width: '100%' }} />
                </Typography>
                {
                    !showId &&
                        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                            Click the button below to paste your wallet transaction ID if you have made payment
                        </Typography>
                }
                
                {
                    showId &&
                        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                            <TextField id="filled-basic" value={transactionId}  name="transactionId" onChange={(e: any) => setTransactionId(e.target.value)} label="Paste the transaction ID" variant="filled" sx={{ width: '100%' }} />
                        </Typography>
                }
                
                <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                    <Button variant="outlined" onClick={handleClick}>{showId ? 'Submit' : 'I have paid?'}</Button>
                </Typography>
            </Box>
        </Modal>
    )
}

export default USDTForm
