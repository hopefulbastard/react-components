import "./galleryarticle.css";

const Galleryarticle = () => {
  return (
    <a href="#" className="galleryarticle">
      <div className="galleryarticleimg">
        <img src="https://i.pinimg.com/564x/c9/d8/56/c9d856657839ba5d5bb4f3458e813107.jpg"></img>
      </div>
      <div className="galleryarticletext">
        <h3>Leisure</h3>
        <h2>Outdoor Experience</h2>
        <p>
          It's windy. The cool breeze of the ocean. It gives, a sense of beauty,
          in motion. All is flowing, rushing and tide- And I sit in wonder,
          dreaming beside.
        </p>
        <div className="galleryarticlesmall">
          <img src="https://i.pinimg.com/736x/1c/2e/57/1c2e57c9147d966973d48e291cf2f9d1.jpg"></img>
          <img src="https://i.pinimg.com/564x/26/23/ad/2623ad3bf53c8487626a85007b133a94.jpg"></img>
          <img src="https://i.pinimg.com/564x/87/e3/d1/87e3d1d1347ce34c62920445b55a025d.jpg"></img>
        </div>
      </div>
    </a>
  );
};

export default Galleryarticle;
