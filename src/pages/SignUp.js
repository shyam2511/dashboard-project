import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { imageDb } from "../firebase/Firebase";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import axios from "axios";
import { AiFillEye } from "react-icons/ai";
import { FaEyeSlash } from "react-icons/fa6";

const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [state, setState] = useState({});
  const [error, setError] = useState(null);
  const [photo, setPhoto] = useState("");
  const [displayedImages, setDisplayedImages] = useState([]);
  const [avatarUrl, setAvatarUrl] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchAvatarUrl = async () => {
      try {
        const url = await getDownloadURL(ref(imageDb, "images/avatar.png"));
        setAvatarUrl(url);
      } catch (error) {
        console.error("Error fetching avatar URL: ", error);
      }
    };
    fetchAvatarUrl();
  }, []);

  const handleState = (e) => {
    setState((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  const onChangeHandler = (e) => {
    setDisplayedImages([]);
    const selectedImage = e.target.files[0];
    const imageUrl = URL.createObjectURL(selectedImage);
    setDisplayedImages([{ url: imageUrl }]);
    setPhoto(e.target.files);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let filenames = null;
      if (photo) {
        console.log(photo[0]);
        if (photo[0].type !== "image/jpeg") {
          setError("Only .jpg profile pictures are allowed.");
          return;
        }
        const filename = `${crypto.randomUUID()}${photo[0].name}`;
        const imgRef = ref(imageDb, `images/${filename}`);
        await uploadBytesResumable(imgRef, photo[0]);
        filenames = filename;
      } else {
        return;
      }

      const responseData = await axios.post(
        `https://coders-dashboard-4cdb4394fb85.herokuapp.com/auth/register`,
        {
          ...state,
          profileImg: filenames,
        }
      );
      console.log(responseData);
      // dispatch(register(responseData));
      navigate("/signin");
    } catch (error) {
      setError(error.message);
      console.error(error);
    }
  };

  return (
    <div>
      <div>
        <form onSubmit={handleSubmit}>
          <h3>Sign Up</h3>
          {error && <p>{error}</p>}
          <div>
            <label>Email address</label>
            <input type="email" name="email" onChange={handleState} />
          </div>
          <div>
            <label>Name</label>
            <input type="text" name="name" onChange={handleState} />
          </div>
          <div>
            <label>Upload Photo</label>
            <input type="file" id="photo" onChange={onChangeHandler} />
            {displayedImages.length > 0 ? (
              <img
                src={displayedImages[0].url}
                alt="Selected"
                onClick={() => document.getElementById("photo").click()}
              />
            ) : (
              <label htmlFor="photo" className="cursor-pointer">
                <img src={avatarUrl} alt="Avatar" />
              </label>
            )}
          </div>
          <div>
            <label>Password</label>
            <div>
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                onChange={handleState}
              />
              <button
                type="button"
                onClick={() => {
                  setShowPassword((prevState) => !prevState);
                }}
              >
                {showPassword ? <AiFillEye /> : <FaEyeSlash />}
              </button>
            </div>
          </div>
          <button type="submit">Signup</button>
          <div>
            <p>
              <Link to="/signin">Already a user? Login</Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
