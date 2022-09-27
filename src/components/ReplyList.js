import React from 'react';

import Reply from './Reply';

export default function ReplyList ({replies}) {
    return (
      <>
        {replies.map((reply) =>
          reply.map((rep) => (
            <Reply
              key={rep.id}
              text={rep.content}
              userImage={rep.user.image.png}
              userName={rep.user.username}
              createdAt={rep.createdAt}
            />
          ))
        )}
      </>
    );
}