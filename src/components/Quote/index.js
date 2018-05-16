import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

import { Form, FormGroup, Label, Input, Button, Modal, ModalHeader, ModalBody } from 'reactstrap';

import './index.css';

export default class Quote extends Component {
  static propTypes = {
    title: PropTypes.string,
    content: PropTypes.string,
    link: PropTypes.string,
    update: PropTypes.func,
    remove: PropTypes.func
  };

  constructor(props) {
    super(props);

    this.state = {
      title: this.props.title,
      content: this.props.content,
      link: this.props.link,
      editQuoteModal: false
    };
  }

  toggleEditQuoteModal() {
    this.setState({
      editQuoteModal: !this.state.editQuoteModal
    });
  }

  onChangeEditQuoteTitle(e) {
    this.setState({
      title: e.target.value
    });
  }

  onChangeEditQuoteContent(e) {
    this.setState({
      content: e.target.value
    });
  }

  onChangeEditQuoteLink(e) {
    this.setState({
      link: e.target.value
    });
  }

  onSubmitEditQuote(e) {
    e.preventDefault();

    const { id, update } = this.props;

    this.toggleEditQuoteModal();

    update({
      id,
      title: this.state.title,
      content: this.state.content,
      link: this.state.link
    });
  }

  render() {
    const {
      title,
      content,
      link,
      remove
    } = this.props;

    return (
      <Fragment>
        <blockquote className="blockquote quote">
          <Button
            type="button"
            size="sm"
            color="primary"
            onClick={() => { this.toggleEditQuoteModal() }}
          >
            Edit
          </Button>
          <Button
            type="button"
            size="sm"
            color="danger"
            onClick={remove}
          >
            Remove
          </Button>
          <div dangerouslySetInnerHTML={{__html: content}} />
          <footer className="blockquote-footer">
            {title} (<a href={link}>{link}</a>)
          </footer>
        </blockquote>

        <Modal
          isOpen={this.state.editQuoteModal}
          toggle={() => { this.toggleEditQuoteModal() }}
        >
          <ModalHeader
            toggle={() => { this.toggleEditQuoteModal() }}
          >
            Edit
          </ModalHeader>
          <ModalBody>
            <Form
              onSubmit={e => { this.onSubmitEditQuote(e) }}
            >
              <FormGroup>
                <Label for="editQuoteTitle">
                  Title
                </Label>
                <Input
                  type="text"
                  value={this.state.title}
                  name="editQuoteTitle"
                  id="editQuoteTitle"
                  onChange={e => { this.onChangeEditQuoteTitle(e) }}
                />
              </FormGroup>
              <FormGroup>
                <Label for="editQuoteContent">
                  Content
                </Label>
                <Input
                  type="textarea"
                  value={this.state.content}
                  name="editQuoteContent"
                  id="editQuoteContent"
                  onChange={e => { this.onChangeEditQuoteContent(e) }}
                />
              </FormGroup>
              <FormGroup>
                <Label for="editQuoteLink">
                  Link
                </Label>
                <Input
                  type="text"
                  value={this.state.link}
                  name="editQuoteLink"
                  id="editQuoteLink"
                  onChange={e => { this.onChangeEditQuoteLink(e) }}
                />
              </FormGroup>
              <Button
                type="submit"
                block
                color="primary"
              >
                Submit
              </Button>
            </Form>
          </ModalBody>
        </Modal>
      </Fragment>
    );
  }
};
