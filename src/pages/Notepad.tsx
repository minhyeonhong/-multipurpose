import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';

const Notepad = () => {

    const [notes, setNotes] = useState<string[]>([""]);

    const writeNote = (e: React.KeyboardEvent<HTMLTextAreaElement>, idx: number) => {
        notes.splice(idx, 1, e.currentTarget.value);
        localStorage.setItem("online_notes", JSON.stringify(notes));
    }

    const addNote = () => {
        const copyNotes = [...notes];
        copyNotes.push("");
        setNotes(copyNotes);
    }

    const deleteNote = (idx: number) => {
        const copyNotes = [...notes];
        copyNotes.splice(idx, 1);
        localStorage.setItem("online_notes", JSON.stringify(copyNotes));
        setNotes(copyNotes);
    }

    useEffect(() => {
        if (localStorage.getItem("online_notes") !== null) {
            const localnotes = JSON.parse(localStorage.getItem("online_notes")!);
            setNotes(localnotes);
        }
    }, [])

    return (
        <div>
            <Helmet>
                <title>메모장 | Notepad</title>
                <meta
                    name="description"
                    content="간편하게 이용할 수 있는 온라인 메모장"
                />
                <meta name="keywords" content="메모장, note, notes, notice" />
            </Helmet>
            <button onClick={addNote}>+</button>
            {
                notes.map((item, idx) => (
                    <div key={idx}>
                        <textarea
                            className='notes'
                            onKeyUp={(e: React.KeyboardEvent<HTMLTextAreaElement>) => writeNote(e, idx)}
                            defaultValue={item}
                        />
                        <button onClick={() => deleteNote(idx)}>x</button>
                    </div>
                ))
            }
        </div>
    );
};

export default Notepad;