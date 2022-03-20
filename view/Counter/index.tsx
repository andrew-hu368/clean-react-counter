import React from 'react';
import { Typography, Button, Space } from 'antd';

import { useCounter } from './Counter.Logic';

export default function Counter({ initialCount = 0 }) {
  const { count, message, increment, decrement } = useCounter(initialCount);

  return (
    <div>
      <Space direction="vertical">
        <div style={{ textAlign: 'center' }}>
          <Typography.Title>{count}</Typography.Title>
        </div>
        <Space>
          <div>
            <Button onClick={decrement}>-</Button>
          </div>
          <div>
            <Button onClick={increment}>+</Button>
          </div>
        </Space>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          {message}
        </div>
      </Space>
    </div>
  );
}
