import React, { useState } from "react";
import { Drawer, Form, Button, Col, Row, Input, Select, Icon } from "antd";

const { Option } = Select;

const FiltersDrawer = () => {
  const [isVisible, setIsVisible] = useState(false);
  const showDrawer = () => {
    setIsVisible(!isVisible);
  };

  const onClose = () => {
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
                <Input placeholder="Nazwa" />
              </Form.Item>

            </Col>
            <Col span={12}>
              <Form.Item label="Maksymalna odległość">
                <Input
                    placeholder={"Max odległość"}
                />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item label="Typ szkoły">
                <Select placeholder="Wybierz typ szkoły">
                  <Option value="liceum">Liceum</Option>
                  <Option value="technikum">Technikum</Option>
                </Select>
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item label="Publiczna/Prywatna">
                <Select placeholder="Wybierz typ szkoły">
                  <Option value="prywatna">Prywatna</Option>
                  <Option value="publiczna">Publiczna</Option>
                </Select>
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item label="Odznaka Perspektyw">
                <Select placeholder="Wybierz typ odznaki">
                  <Option value="brak">Brak</Option>
                  <Option value="braz">Brązowa</Option>
                  <Option value="srebro">Srebrna</Option>
                  <Option value="zloto">Złota</Option>
                </Select>
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item label="Publiczna/Prywatna">
                <Select placeholder="Wybierz typ szkoły">
                  <Option value="prywatna">Prywatna</Option>
                  <Option value="publiczna">Publiczna</Option>
                </Select>
              </Form.Item>
            </Col>
          </Row>


        </Form>
        <div
          style={{
            position: "absolute",
            left: 0,
            bottom: 0,
            width: "100%",
            borderTop: "1px solid #e9e9e9",
            padding: "10px 16px",
            background: "#505050",
            textAlign: "right"
          }}
        >
          <Button onClick={onClose} style={{ marginRight: 8 }}>
            Cancel
          </Button>
          <Button onClick={onClose} type="primary">
            Submit
          </Button>
        </div>
      </Drawer>
    </div>
  );
};

export default FiltersDrawer;
