import { useState, useContext } from "react";
import "./write.css";
import axios from "../http";
import { Context } from "../Context/Context";

export default function Write() {
  const [title, setTitle] = useState("");
  const [desc, setdesc] = useState("");
  const [file, setfile] = useState(null);
  const { user } = useContext(Context);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newPost = {
      username: user.username,
      title,
      desc,
    };
    if (file) {
      const data = new FormData();
      const filename = Date.now() + file.name;
      data.append("name", filename);
      data.append("file", file);
      newPost.photo = filename;
      try {
        await axios.post("/upload", data);
      } catch (err) {}
    }
    try {
      const res = await axios.post("/posts/", newPost);
      console.log(res);
      console.log(res.data._id);
      window.location.replace("http://localhost:3000/post/" + res.data._id);
    } catch (err) {}
  };
  return (
    <div className="write">
      {file && (
        <img className="writeimg" src={URL.createObjectURL(file)} alt="" />
      )}
      <form className="writeform" onSubmit={handleSubmit}>
        <div className="writeformgroup">
          <label htmlFor="fileinput">
            <i className="writeicon fas fa-plus"></i>
          </label>
          <input
            type="file"
            id="fileinput"
            style={{ display: "none" }}
            onChange={(e) => setfile(e.target.files[0])}
          />
          <input
            type="text"
            placeholder="title"
            className="writeinput"
            autoFocus={true}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="writeformgroup">
          <textarea
            placeholder="Tell your story......"
            type="text"
            className="writeinput writetext"
            onChange={(e) => setdesc(e.target.value)}
          ></textarea>
        </div>
        <button className="writesubmit" type="submit">
          Publish
        </button>
      </form>
    </div>
  );
}
