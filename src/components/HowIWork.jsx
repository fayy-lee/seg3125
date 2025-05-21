import React, { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import { Container, Row, Col } from 'react-bootstrap';
import PropTypes from 'prop-types';
import Fade from 'react-reveal';
import Header from './Header';
import { endpoints } from '../constants/endpoints';
import FallbackSpinner from './FallbackSpinner';

function HowIWork({ header }) {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(endpoints.howiwork)
      .then((res) => res.json())
      .then((res) => setData(res))
      .catch((err) => console.error(err));
  }, []);

  return (
    <>
      <Header title={header} />
      <div className="section-content-container">
        <Container>
          {data ? (
            <Fade>
              <Row>
                <Col style={{ fontSize: '1.2em', whiteSpace: 'pre-wrap' }}>
                  <ReactMarkdown>{data.howiwork}</ReactMarkdown>
                </Col>
              </Row>
            </Fade>
          ) : (
            <FallbackSpinner />
          )}
        </Container>
      </div>
    </>
  );
}

HowIWork.propTypes = {
  header: PropTypes.string.isRequired,
};

export default HowIWork;
