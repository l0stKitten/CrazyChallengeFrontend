import React from 'react';
import ButtonBar from './ButtonBar';
import './styles.css';

function ProfileHeader() {
  return (
    <div>
      <div className="portada">
          <img
            src="https://i.ytimg.com/vi/VknBhl7LGW0/maxresdefault.jpg"
            alt="Portada"
            className="imagen-portada"
          />
      </div>
      <div className="profile-header">
        <img
          src="https://elcomercio.pe/resizer/-ff-6d9vg7CILcQh-WvejY7_3lQ=/1200x1200/smart/filters:format(jpeg):quality(75)/cloudfront-us-east-1.images.arcpublishing.com/elcomercio/6FUBT6XQXNHHNFOMCHIT7I34NA.jpg"
          alt="Profile"
          height={100}
          className="profile-image"
        />

        <div className="profile-buttons">
          <ButtonBar/>
        </div>
      </div>
    </div>
  );
}

export default ProfileHeader;
