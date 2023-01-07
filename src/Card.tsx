type Props = {
  user: {
    fullName: string;
    role: string;
  };
};

export const Card = ({ user }: Props) => (
  <div
    style={{
      display: 'flex',
      width: '300px',
      height: '60px',
      border: '1px solid green',
      alignItems: 'center',
      padding: '10px',
    }}
  >
    <div style={{ display: 'flex', width: '40px', height: '40px', background: 'red', marginRight: '10px' }} />
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <div>{user.fullName}</div>
      <div>{user.role}</div>
    </div>
  </div>
);
