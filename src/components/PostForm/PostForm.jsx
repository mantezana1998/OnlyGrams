import React, {useState} from 'react';
import { Button, Form, Grid, Segment } from "semantic-ui-react";

export default function AddPostForm(props){

    const [selectFile, setSelectFile] = useState("");
    const [state, setState] = useState({
        caption: ''
    });

    function handleChange(e){
        const name = e.target.name;
        const value = e.target.value;
        setState({
            ...state,
            [name]: value
        });
    }
    
    function handleFileInput(e){
        setSelectFile(e.target.files[0])
    }

    function handleSubmit(e){
        e.preventDefault();
        
        const formData = new FormData();
        formData.append('photo', selectFile)
        formData.append('caption', state.caption)
        props.handleAddPost(formData)
    }

    return (
        <Grid textAlign="center" verticalAlign="middle">
        <Grid.Column style={{ maxWidth: 450 }}>
          <Segment>
            <Form autoComplete="off" onSubmit={handleSubmit}>
              <Form.Input
                className="form-control"
                name="caption"
                placeholder="What do weed want to talk about?"
                value={state.caption}
                onChange={handleChange}
                required
              />
              <Form.Input
                className="form-control"
                type="file"
                name="photo"
                placeholder="upload image"
                onChange={handleFileInput}
              />
              <Button type="submit" className="btn">
                Add Post
              </Button>
            </Form>
          </Segment>
        </Grid.Column>
      </Grid>
    )
}