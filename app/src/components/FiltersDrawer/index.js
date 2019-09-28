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
        title="Create a new account"
        width={720}
        onClose={onClose}
        visible={isVisible}
      >
        <Form layout="vertical" hideRequiredMark>
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item label="Name"></Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item label="Url">
                <Input
                  style={{ width: "100%" }}
                  addonBefore="http://"
                  addonAfter=".com"
                  placeholder="Please enter url"
                />
                )}
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item label="Owner">
                <Select placeholder="Please select an owner">
                  <Option value="xiao">Xiaoxiao Fu</Option>
                  <Option value="mao">Maomao Zhou</Option>
                </Select>
                )}
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item label="Type">
                <Select placeholder="Please choose the type">
                  <Option value="private">Private</Option>
                  <Option value="public">Public</Option>
                </Select>
                )}
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item label="Approver"></Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item label="DateTime"></Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col span={24}>
              <Form.Item label="Description"></Form.Item>
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
            background: "#fff",
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
