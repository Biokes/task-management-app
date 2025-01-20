import {Box, Button, DialogActions, IconButton, MenuItem, Modal, TextField, Typography} from '@mui/material';
import React, {useState} from 'react';
import DatePicker from "react-datepicker";
import 'react-datepicker/dist/react-datepicker.css';
import CloseIcon from '@mui/icons-material/Close';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import {Priority} from "../../types/interfaces";

interface ModalProps{
    isOpen: boolean,
    onClose: () => void
}
export default function CreateTaskModal(props:ModalProps) {
    const addTask=()=>{

    }
    const [taskName,setTaskName] = useState<string>('')
    const [taskDescription , setTaskDescription] = useState<string>('')
    const [priority, setPriority] = useState<Priority>(Priority.LOW_PRIORITY);
    const [dueDate, setDueDate] = useState<Date>(new Date());

    return (
        <>
            <div className="fixed inset-0 bg-customBlue_dark bg-opacity-80 z-40" onClick={props.onClose}></div>

            <Modal open={props.isOpen} onClose={props.onClose}>
                <Box sx={{position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)',
                    width: { xs: '90%', sm: '600px' }, backgroundColor: 'background.paper', boxShadow: 24,
                    p: { xs: 2, sm: 4 }, borderRadius: 2, zIndex: 50, overflowY: 'auto', maxHeight: '70vh',}}>
                    <IconButton onClick={props.onClose} sx={{ position: 'absolute', top: 8, right: 8 }}>
                        <CloseIcon />
                    </IconButton>

                    <Typography variant="h6" component="h2" sx={{ mb: 2, color: '#475661', fontSize: { xs: '1.2rem', sm: '1.5rem' } }}>
                        Create a Task
                    </Typography>

                    <form onSubmit={(e) => {
                        e.preventDefault();
                        addTask(); }}>
                        <Box sx={{ mb: 2 }}>
                            <Typography variant="body2" sx={{ mb: 1, color: '#475661' }}>Task Name</Typography>
                            <TextField fullWidth placeholder="Ex. Task one" variant="outlined" size="small"
                                       value={taskName} onChange={(e) => {
                                e.preventDefault()
                                setTaskName(e.target.value)
                            }} InputProps={{ style: { color: '#475661' } }}/>
                        </Box>

                        <Box sx={{ mb: 2 }}>
                            <Typography variant="body2" sx={{ mb: 1, color: '#475661' }}>Task Description</Typography>
                            <TextField
                                fullWidth
                                multiline
                                rows={3}
                                placeholder="Ex. A space for Python developers"
                                variant="outlined"
                                size="small"
                                value={taskDescription}
                                onChange={(e) => {
                                    e.preventDefault()
                                    setTaskDescription(e.target.value)
                                }}
                                InputProps={{ style: { color: '#475661' } }}
                            />
                        </Box>

                        <Box sx={{ mb: 2 }}>
                            <Typography variant="body2" sx={{ mb: 1, color: '#475661' }}>Task Priority</Typography>
                            <TextField
                                select
                                fullWidth
                                value={priority}
                                // onChange={(e) => setPriority(e.target.value as Priority)}
                                onChange={(e) => {
                                    const value = e.target.value;
                                    if (Object.values(Priority).includes(value as Priority)) {
                                        setPriority(value as Priority);
                                    } else {
                                        setPriority(Priority.LOW_PRIORITY)
                                    }
                                }}
                                variant="outlined"
                                size="small"
                                InputProps={{ style: { color: '#475661' } }}
                            >
                                <MenuItem value="" disabled>
                                    Task Priority
                                </MenuItem>
                                {[
                                    { name: 'URGENT',value:Priority.URGENT },
                                    { name: "TRIVIAL",value:Priority.TRIVIAL },
                                    { name: "LOW_PRIORITY",value: Priority.LOW_PRIORITY },
                                    { name: "MEDIUM", value: Priority.MEDIUM},
                                ].map((priority) => (
                                    <MenuItem key={priority.name} value={priority.value}>
                                        {priority.name}
                                    </MenuItem>
                                ))}i
                            </TextField>
                        </Box>

                        <Box sx={{ mb: 2, display: 'flex', gap: 2, flexDirection: { xs: 'column', sm: 'row' } }}>
                            <div>
                                <p className={'text-xs'}>Start Date</p>
                                <div className="relative flex">
                                    <DatePicker selected={dueDate} onChange={(date) => setDueDate(date as Date)} placeholderText="23 Dec 2021"
                                                minDate={new Date()} dateFormat="dd-MM-yyyy"
                                                className="w-full p-2 border rounded text-sm outline-none focus:ring-2 focus:ring-[#008eef]
                                                focus:border-[#008eef]"/>
                                    <span className="absolute flex justify-center pointer-events-none">
                                        <CalendarTodayIcon className="h-[18px] w-[18px] ml-[160px] mt-[10px] text-[#475661]"/>
                                    </span>
                                </div>
                            </div>

                        </Box>

                        {/*<Box sx={{mb: 2}}>*/}
                        {/*    <Typography variant="body2" sx={{mb: 1, color: '#475661'}}>Add a cohort avatar</Typography>*/}
                        {/*    <Box*/}
                        {/*        {...getRootProps()}*/}
                        {/*        sx={{*/}
                        {/*            border: '2px dashed lightblue',*/}
                        {/*            borderRadius: '8px',*/}
                        {/*            textAlign: 'center',*/}
                        {/*            cursor: 'pointer',*/}
                        {/*            mt: 1,*/}
                        {/*            backgroundColor: '#eaf5fa',*/}
                        {/*            height: '100px',*/}
                        {/*            overflow: 'hidden'*/}
                        {/*        }}*/}
                        {/*    >*/}
                        {/*        <input {...getInputProps()} />*/}
                        {/*        {selectedFile ? (*/}
                        {/*            <Box sx={{ position: 'relative', height: '100%', width: '100%' }}>*/}
                        {/*                <Image*/}
                        {/*                    src={selectedFile}*/}
                        {/*                    alt="Selected file preview"*/}
                        {/*                    layout="fill"*/}
                        {/*                    objectFit="cover"*/}
                        {/*                    style={{ borderRadius: '8px' }}*/}
                        {/*                />*/}
                        {/*            </Box>*/}
                        {/*        ) : (*/}
                        {/*            <>*/}
                        {/*                {isDragActive ? (*/}
                        {/*                    <Typography variant="body2" sx={{ color: '#475661' }}>Drop the files here ...</Typography>*/}
                        {/*                ) : (*/}
                        {/*                    <>*/}
                        {/*                        <FileUploadOutlinedIcon sx={{ fontSize: 40, color: '#475661' }} />*/}
                        {/*                        <Typography variant="body2" sx={{ mt: 1, color: '#475661',fontWeight:'small' }}>*/}
                        {/*                            Drag and drop files here, or click to select files*/}
                        {/*                        </Typography>*/}
                        {/*                    </>*/}
                        {/*                )}*/}
                        {/*            </>*/}
                        {/*        )}*/}
                        {/*    </Box>*/}
                        {/*    <div className="flex items-center px-[3px]">*/}
                        {/*        <ErrorOutlineOutlinedIcon sx={{ fontSize: 20, color: '#475661' }} />*/}
                        {/*        {formError ?<p className="text-xs text-red-500">{formError}</p>:*/}
                        {/*            <p className={'text-xs'}>You can add this later</p>}*/}
                        {/*    </div>*/}
                        {/*</Box>*/}

                        <DialogActions sx={{ mt: 2 }}>
                            <Button variant="outlined" onClick={props.onClose}>Cancel</Button>
                            <Button variant="contained" type="submit"
                                    disabled={!taskName || !taskDescription || !priority  || !dueDate}>
                                Create Cohort
                            </Button>
                        </DialogActions>
                    </form>
                </Box>
            </Modal>
        </>
    )
}
