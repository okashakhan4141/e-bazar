import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { faqs } from '../../../utils/dummyData';
import { Paper } from '@mui/material';

export default function SimpleAccordion() {
  return (
    <div style={{ margin: '10px 0' }}>
      {faqs.map((faq, i) => (
        <Accordion key={i}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography>{faq.question}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Paper
              elevation={0}
              sx={{ padding: '5px', backgroundColor: '#F0F0F0' }}
            >
              <Typography>{faq.answer}</Typography>
            </Paper>
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  );
}
