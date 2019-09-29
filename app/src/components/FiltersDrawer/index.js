import React, { useState } from "react";
import { Drawer, Form, Button, Col, Row, Input, Select, Icon } from "antd";
import "./index.css";

const { Option } = Select;

const FiltersDrawer = ({
  setIsFilteredParent,
  setFilterNameParent,
  setFilterTypeParent,
  setFilterIsPublicParent,
  setFilterPerspectiveBadgeParent,
  setFilterLocationParent,
  setFilterWskParent
}) => {
  const [isVisible, setIsVisible] = useState(false);

  const [filterName, setFilterName] = useState(""); // string
  const [filterLocation, setFilterLocation] = useState(""); // string
  const [filterType, setFilterType] = useState(""); // string
  const [filterIsPublic, setFilterIsPublic] = useState(true); // bool
  const [filterPerspectiveBadge, setFilterPerspectiveBadge] = useState(""); // string
  const [filterWsk, setFilterWsk] = useState(0); // string

  const showDrawer = () => {
    setIsVisible(!isVisible);
  };

  const onClose = () => {
    setIsVisible(false);
  };

  const onSubmit = () => {
    setFilterNameParent(filterName);
    setFilterTypeParent(filterType);
    setFilterIsPublicParent(filterIsPublic);
    setFilterPerspectiveBadgeParent(filterPerspectiveBadge);
    setFilterLocationParent(filterLocation);
    setFilterWskParent(filterWsk);
    setIsFilteredParent(true);
    setIsVisible(false);
  };

  return (
    <div>
      <Button
        type="primary"
        style={{
          backgroundColor: "#ffae3c",
          borderColor: "#ffae3c"
        }}
        onClick={showDrawer}
      >
        <b>Filter</b> <Icon type="right" />
      </Button>
      <Drawer
        title="Lista filtrów"
        width={"50vw"}
        onClose={onClose}
        visible={isVisible}
      >
        <Form layout="vertical" hideRequiredMark>
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item label="Nazwa szkoły">
                <Input
                  placeholder="Nazwa"
                  onChange={e => {
                    setFilterName(e.target.value);
                    console.log("name filter:", e.target.value);
                  }}
                />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item label="Lokalizacja">
                <Input
                  placeholder={"Miasto lub województwo"}
                  onChange={e => {
                    setFilterLocation(e.target.value);
                    console.log("location filter:", e.target.value);
                  }}
                />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item label="Typ szkoły">
                <Select
                  placeholder="Wybierz typ szkoły"
                  onChange={e => {
                    setFilterType(e);
                    console.log("type filter:", e);
                  }}
                >
                  <Option value="liceum">Liceum</Option>
                  <Option value="technikum">Technikum</Option>
                </Select>
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item label="Publiczna/Prywatna">
                <Select
                  placeholder="Wybierz typ szkoły"
                  onChange={e => {
                    setFilterIsPublic(e);
                    console.log("type filter:", e);
                  }}
                >
                  <Option value={false}>Prywatna</Option>
                  <Option value={true}>Publiczna</Option>
                </Select>
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item label="Odznaka Perspektyw">
                <Select
                  placeholder="Wybierz typ odznaki"
                  onChange={e => {
                    setFilterPerspectiveBadge(e);
                    console.log("type filter:", e);
                  }}
                >
                  <Option value="bronze">Wszystkie</Option>
                  <Option value="silver">Srebrne i złote</Option>
                  <Option value="gold">Tylko złote</Option>
                </Select>
              </Form.Item>
              <Form.Item label="WSK">
                <Select
                  placeholder="Wybierz próg WSK"
                  onChange={e => {
                    setFilterWsk(parseInt(e, 10));
                    console.log("type filter:", e);
                  }}
                >
                  <Option value="25">25</Option>
                  <Option value="50">50</Option>
                  <Option value="75">75</Option>
                </Select>
              </Form.Item>
            </Col>
          </Row>
        </Form>
        <div className="filtersBar">
          <Button onClick={onClose} style={{ marginRight: 8 }}>
            Cancel
          </Button>
          <Button onClick={onSubmit} type="primary">
            Submit
          </Button>
        </div>
      </Drawer>
    </div>
  );
};

export default FiltersDrawer;
