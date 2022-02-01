import "./styles.css";
import React from "react";
import { FormattedMessage } from "react-intl";
import { Form, Input, InputNumber } from "antd";
import Button from "../../components/Button";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";

const Contact = () => {
  const layout = {
    labelCol: {
      span: 8,
    },
    wrapperCol: {
      span: 16,
    },
  };
  return (
    <div className='h-100 d-flex justify-content-center align-items-center min-vh-100'>
      <Form
        name='contact-form'
        layout='vertical'
        style={{ width: "40vw" }}
        validateTrigger='submit'
      >
        <Form.Item
          name={"name"}
          label='Name'
          rules={[
            {
              required: true,
              message: "Please enter your name!",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name={["user", "email"]}
          label='Email'
          rules={[
            {
              type: "email",
              message: "Please enter a valid email address!",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name={"message"}
          label='Message'
          rules={[
            {
              required: true,
              message: "Please type a message!",
            },
          ]}
        >
          <Input.TextArea showCount bordered maxLength={500} rows={6} />
        </Form.Item>
        <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
          <Button
            key='submit'
            htmlType='submit'
            icon={faPaperPlane}
            buttonText={<FormattedMessage id='Send' />}
            iconOpacity={0.4}
            onClick={() => {
              console.log("Message Sent");
            }}
          />
        </Form.Item>
      </Form>
    </div>
  );
};

export default Contact;
