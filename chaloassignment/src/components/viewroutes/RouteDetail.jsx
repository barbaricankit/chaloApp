const RouteDetail = ({ route }) => {
  return (
    <div>
      <p>{route.routeName}</p>
      <p>{route.direction}</p>
      <p>{route.status}</p>
    </div>
  );
};

export default RouteDetail;
