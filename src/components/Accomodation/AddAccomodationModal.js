import React, { useState } from "react";
import {
  Button,
  Col,
  Form,
  FormGroup,
  Input,
  Label,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
  Row,
} from "reactstrap";

let initialFormData = {
  title: "",
  availibilty: "immediate booking",
  availableFrom: "",
  type: "appartment",
  price: "",
  currency: "€",
  city: "",
  country: "united kingdom",
  address: "",
};

const AddAccomodationModal = ({ accomodationModal, toggle }) => {
  const [formData, setFormData] = useState(initialFormData);
  const [propertyImages, setpropertyImages] = useState([]);
  const [imagePreviews, setImagePreviews] = useState([]);
  const currencyOptions = [
    {
      name: "EUR",
      value: "€",
    },
    {
      name: "GBP",
      value: "£",
    },
    { name: "USD", value: "$" },
    { name: "SEK", value: "SEK" },
  ];
  const types = ["appartment", "flat", "studio", "room"];
  const countries = [
    "united kingdom",
    "spain",
    "italy",
    "sweden",
    "switzerland",
    "france",
    "natherlands",
    "germany",
  ];
  const availabiltyOptions = [
    "available from",
    "immediate booking",
    "booked until",
  ];

  const addAccomodation = (e) => {
    e.preventDefault();
    console.log({ formData, Images: propertyImages });
  };

  const handleImageChange = (e) => {
    const files = e.target.files;

    if (files && files.length > 0) {
      const newImagePreviews = [];

      Array.from(files).forEach((file) => {
        setpropertyImages((prev) => [...prev, file]);
        const reader = new FileReader();
        reader.onload = (readerEvent) => {
          newImagePreviews.push(readerEvent.target.result);
          if (newImagePreviews.length === files.length) {
            setImagePreviews((prev) => [...prev, ...newImagePreviews]);
          }
        };

        reader.readAsDataURL(file);
      });
    }
  };

  const handleImageClick = () => {
    document.getElementById("fileInput").click();
  };
  const removeImage = (index) => {
    const updatedPreviews = [...imagePreviews];
    updatedPreviews.splice(index, 1);
    setImagePreviews(updatedPreviews);
    setpropertyImages(updatedPreviews);
  };

  return (
    <Modal isOpen={accomodationModal} toggle={toggle}>
      <ModalHeader toggle={toggle}>Add Accomodation</ModalHeader>
      <ModalBody className="py-0">
        <Form>
          <Row>
            <Col className="col-12 col-md-6">
              <FormGroup>
                <Label for="exampleEmail">Title</Label>
                <Input
                  value={formData.title}
                  onChange={(e) =>
                    setFormData({ ...formData, title: e.target.value })
                  }
                  id="exampleEmail"
                  name="title"
                  placeholder="Accomodation Title"
                  type="text"
                />
              </FormGroup>
            </Col>
            <Col className="col-12 col-md-6">
              <FormGroup>
                <Label for="exampleEmail">Type</Label>
                <Input
                  id="exampleEmail"
                  name="City"
                  placeholder="City"
                  type="select"
                  className="text-capitalize"
                  value={formData.type}
                  onChange={(e) =>
                    setFormData({ ...formData, type: e.target.value })
                  }
                >
                  {types.map((item) => {
                    return (
                      <option value={item} className="text-capitalize">
                        {item}
                      </option>
                    );
                  })}
                </Input>
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col>
              <FormGroup>
                <Label for="exampleEmail">Full Address</Label>
                <Input
                  id="exampleEmail"
                  name="Address"
                  value={formData.address}
                  onChange={(e) =>
                    setFormData({ ...formData, address: e.target.value })
                  }
                  placeholder="Address"
                  type="textarea"
                />
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col className="col-12 col-md-6">
              <FormGroup>
                <Label for="exampleEmail">Country</Label>
                <Input
                  id="exampleEmail"
                  name="country"
                  placeholder="Country"
                  className="text-capitalize"
                  type="select"
                  value={formData.country}
                  onChange={(e) =>
                    setFormData({ ...formData, country: e.target.value })
                  }
                >
                  {countries.map((item) => {
                    return (
                      <option value={item} className="text-capitalize">
                        {item}
                      </option>
                    );
                  })}
                </Input>
              </FormGroup>
            </Col>
            <Col className="col-12 col-md-6">
              <FormGroup>
                <Label for="exampleEmail">City</Label>
                <Input
                  id="exampleEmail"
                  name="City"
                  placeholder="City"
                  type="text"
                  value={formData.city}
                  onChange={(e) =>
                    setFormData({ ...formData, city: e.target.value })
                  }
                />
              </FormGroup>
            </Col>
          </Row>
          <div>
            <Label>Accomodation Images</Label>
            <input
              type="file"
              id="fileInput"
              accept="image/*"
              multiple
              style={{ display: "none" }}
              onChange={handleImageChange}
            />
            <Row className="my-3">
              {imagePreviews.length > 0 &&
                imagePreviews.map((preview, index) => (
                  <Col className="col-3 mb-2 position-relative">
                    <div
                      className="position-absolute image_remove_x"
                      onClick={() => removeImage(index)}
                    >
                      x
                    </div>
                    <img
                      src={preview}
                      className="w-100 h-100"
                      alt={`Accommodation ${index + 1}`}
                    />
                  </Col>
                ))}
              <Col
                className="col-3 text-center cursor-pointer"
                onClick={handleImageClick}
              >
                <svg
                  width="65px"
                  height="65px"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M15 21H9C6.17157 21 4.75736 21 3.87868 20.1213C3 19.2426 3 17.8284 3 15M21 15C21 17.8284 21 19.2426 20.1213 20.1213C19.8215 20.4211 19.4594 20.6186 19 20.7487"
                    stroke="#1C274C"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M12 16V3M12 3L16 7.375M12 3L8 7.375"
                    stroke="#1C274C"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </Col>
            </Row>
          </div>

          <Row>
            <Col>
              <FormGroup>
                <Label>Availbilty</Label>
                <Input
                  type="select"
                  className="text-capitalize"
                  value={formData.availibilty}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      availibilty: e.target.value,
                    })
                  }
                >
                  {availabiltyOptions.map((item) => {
                    return (
                      <option value={item} className="text-capitalize">
                        {item}
                      </option>
                    );
                  })}
                </Input>
              </FormGroup>
            </Col>
          </Row>
          {formData.availibilty !== "immediate booking" && (
            <Row>
              <Col>
                <FormGroup>
                  <Label> Availbale From</Label>
                  <Input
                    type="date"
                    value={formData.availableFrom}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        availableFrom: e.target.value,
                      })
                    }
                  ></Input>
                </FormGroup>
              </Col>
            </Row>
          )}
          <Row>
            <Col className="col-12 col-md-6">
              <FormGroup>
                <Label> Price</Label>
                <Input
                  type="number"
                  min={0}
                  placeholder="00"
                  value={formData.price}
                  onChange={(e) =>
                    setFormData({ ...formData, price: e.target.value })
                  }
                />
              </FormGroup>
            </Col>
            <Col className="col-12 col-md-6">
              <FormGroup>
                <Label> Currency</Label>
                <Input
                  id="exampleSelect"
                  name="select"
                  type="select"
                  value={formData.currency}
                  onChange={(e) =>
                    setFormData({ ...formData, currency: e.target.value })
                  }
                >
                  {currencyOptions.map((item) => {
                    return <option value={item.value}>{item.name}</option>;
                  })}
                </Input>
              </FormGroup>
            </Col>
          </Row>
        </Form>
      </ModalBody>
      <ModalFooter>
        <Button color="secondary" onClick={toggle}>
          Cancel
        </Button>
        <Button color="primary" onClick={addAccomodation}>
          Add Accomodation
        </Button>{" "}
      </ModalFooter>
    </Modal>
  );
};

export default AddAccomodationModal;
