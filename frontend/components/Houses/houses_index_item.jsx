import React from "react";

//house={house} openModal={openModal} closeModal={closeModal}
//({ house, openModal, createSave, saves, deleteSave }) =>
class HouseIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isSaved: props.saved,
    };
    this.handleSaves = this.handleSaves.bind(this);
  }

  handleSaves() {
    const { isSaved } = this.state;
    if (this.state.isSaved) {
      this.setState({ isSaved: !isSaved });
      debugger;
      this.props.deleteSave(this.props.house);
    } else {
      this.setState({ isSaved: !isSaved });
      debugger;
      this.props.createSave(this.props.house);
    }
  }
  onClick() {
    history.push(`zips/${house.id}`);
  }

  render() {
    const { house, createSave, deleteSave, openModal, currentUser } =
      this.props;

    const heart =
      this.state.isSaved && currentUser.id ? (
        <a className="fas fa-heart saved"></a>
      ) : (
        <a className="far fa-heart"></a>
      );

    return (
      <div className="property-thumbnail-container">
        <div className="property-thumbnail">
          <img src={house.photoUrls} onClick={() => onClick} />
          <div className="heart-container">
            <button
              id="heart"
              onClick={
                currentUser.id
                  ? () => this.handleSaves(house)
                  : () => openModal("login")
              }>
              {heart}
            </button>
          </div>
        </div>
        <div className="property-thumbnail-info">
          <div>
            <h2>${`${house.price}`} /mo</h2>
            <p>{house.detail}</p>
            <p>{`${house.address}, ${house.city}, ${house.state} ${house.zipcode}`}</p>
            {house.is_available ? "For sale" : ""}
          </div>
        </div>
      </div>
    );
  }
}

export default HouseIndexItem;
