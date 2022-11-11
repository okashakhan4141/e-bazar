import { Paper } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Rating from '@mui/material/Rating';

import { comments } from '../../utils/dummyData';
import ProductRating from './productRating';

const Comments = props => {
  return (
    <>
      <ProductRating></ProductRating>
      {comments.map((comment, index) => (
        <Paper key={index} sx={{ margin: '10px 0', padding: '10px' }}>
          <Stack direction="row" spacing={2}>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <Avatar
                alt="Remy Sharp"
                sx={{ width: 40, height: 40, marginRight: '10px' }}
                src=""
              />
              <Stack direction="column" spacing={-1}>
                <Typography
                  variant="body1"
                  sx={{ fontStyle: 'bold' }}
                  gutterBottom
                >
                  {comment.user.name}
                </Typography>
                <Typography
                  variant="body1"
                  sx={{ fontSize: '12px', color: '#c1bcbc' }}
                  gutterBottom
                >
                  {comment.date}
                </Typography>
              </Stack>
            </div>

            <Rating
              name="read-only"
              size="small"
              precision={0.5}
              value={comment.rating}
              readOnly
            />
          </Stack>
          <Paper
            elevation={0}
            sx={{
              margin: '10px 0',
              padding: '5px 10px',
              backgroundColor: '#F0F0F0',
            }}
          >
            <Typography variant="body2" gutterBottom>
              {comment.comment}
            </Typography>
          </Paper>
        </Paper>
      ))}
    </>
  );
};

export default Comments;
