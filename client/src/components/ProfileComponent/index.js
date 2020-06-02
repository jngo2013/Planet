import React from "react";
import { Container, Grid, Segment, Button } from "semantic-ui-react";

const ProfileComponent = (props) => {
  return (
    <div>
      <Container>
        <Grid padded style={{ height: "100vh" }}>
          <Grid.Row style={{ height: "70%" }}>
            <Grid.Column width={12}>
              <Segment className="profile-segment-main">
                <div className="profile-seg">
                  <h1 className="profile-name">
                    Your username:&nbsp;&nbsp;{props.profileInfo.userName}
                  </h1>
                </div>
                <img
                  className="profile-image"
                  src={props.profileInfo.Gender}
                  alt="profile"
                />
                <Segment className="profile-bio">
                  <p className="profile-text">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Aliquid consectetur deserunt doloremque dolorum explicabo
                    harum impedit, itaque laborum mollitia odio optio
                    perferendis perspiciatis possimus quasi quo reiciendis
                    similique suscipit tempore veniam voluptates! Ab beatae
                    earum illum, iure nesciunt nulla quas qui! Amet architecto,
                    cum dignissimos ducimus error et fugit illum, incidunt ipsam
                    modi pariatur perspiciatis quasi quidem sed, vero voluptatem
                    voluptatibus. Ad consequatur consequuntur dolores itaque
                    obcaecati placeat provident recusandae sed voluptas. Aliquid
                    culpa dolore dolorum ducimus facilis illum, laboriosam
                    libero minima mollitia neque nobis, obcaecati, qu Ad
                    consequatur consequuntur dolores itaque obcaecati placeat
                    provident recusandae sed voluptas. Aliquid culpa dolore
                    dolorum ducimus facilis illum, laboriosam libero minima
                    mollitia neque nobis, obcaecati, quis quod rerum saepe sint
                    temporibus ullam unde vero vitae! Accusamus architecto
                    cupiditate eum fugiat harum, labore odit quos sed sequi
                    voluptatibus! Accusantium animi architecto blanditiis cumque
                    is quod rerum saepe sint temporibus ullam u Ad consequatur
                    consequuntur dolores itaque obcaecati placeat provident
                    recusandae sed voluptas. Aliquid culpa dolore dolorum
                    ducimus facilis illum, laboriosam libero minima mollitia
                    neque nobis, obcaecati, quis quod rerum saepe sint
                    temporibus ullam unde vero vitae! Accusamus architecto
                    cupiditate eum fugiat harum, labore odit quos sed sequi
                    voluptatibus! Accusantium animi architecto blanditiis cumque
                    nde vero vitae! Accusamus architecto cupiditate eum fugiat
                    harum, labore odit quos sed sequi voluptatibus! Accusantium
                    animi architecto blanditiis cumque earum fugit, magni
                    maiores necessitatibus optio placeat quasi sed similique
                    temporibus unde vitae! AbLorem ipsum dolor sit amet,
                    consectetur adipisicing elit. Aliquid consectetur deserunt
                    doloremque dolorum explicabo harum impedit, itaque laborum
                    mollitia odio optio perferendis perspiciatis possimus quasi
                    quo reiciendis similique suscipit tempore veniam voluptates!
                    Ab beatae earum illum, iure nesciunt nulla quas qui! Amet
                    architecto, cum dignissimos ducimus error et fugit illum,
                    incidunt ipsam modi pariatur perspiciatis quasi quidem sed,
                    vero voluptatem voluptatibus. Ad consequatur consequuntur
                    dolores itaque obcaecati placeat provident recusandae sed
                    voluptas. Aliquid culpa dolore dolorum ducimus facilis
                    illum, laboriosam libero minima mollitia neque nobis,
                    obcaecati, qu Ad consequatur consequuntur dolores itaque
                    obcaecati placeat provident recusandae sed voluptas. Aliquid
                    culpa dolore dolorum ducimus facilis illum, laboriosam
                    libero minima mollitia neque nobis, obcaecati, quis quod
                    rerum saepe sint temporibus ullam unde vero vitae! Accusamus
                    architecto cupiditate eum fugiat harum, labore odit quos sed
                    sequi voluptatibus! Accusantium animi architecto blanditiis
                    cumque is quod rerum saepe sint temporibus ullam u Ad
                    consequatur consequuntur dolores itaque obcaecati placeat
                    provident recusandae sed voluptas. Aliquid culpa dolore
                    dolorum ducimus facilis illum, laboriosam libero minima
                    mollitia neque nobis, obcaecati, quis quod rerum saepe sint
                    temporibus ullam unde vero vitae! Accusamus architecto
                    cupiditate eum fugiat harum, labore odit quos sed sequi
                    voluptatibus! Accusantium animi architecto blanditiis cumque
                    nde vero vitae! Accusamus architecto cupiditate eum fugiat
                    harum, labore odit quos sed sequi voluptatibus! Accusantium
                    animi architecto blanditiis cumque earum fugit, magni
                    maiores necessitatibus optio placeat quasi sed similique
                    temporibus unde vitae! Ab{" "}
                  </p>
                </Segment>
              </Segment>
            </Grid.Column>
            <Grid.Column width={4}>
              <h1 className="profile-info">&nbsp;&nbsp;My info</h1>
              <Container>
                <Segment className="profile-segment-sidebar">
                  <div>
                    <p className="profile-right-sidebar">
                      My Email: {props.profileInfo.email}
                    </p>
                  </div>
                </Segment>
                <div>
                  <Button
                    content="Update you bio"
                    color="black"
                    size="large"
                    className="profile-update"
                  />
                </div>
              </Container>
            </Grid.Column>
          </Grid.Row>

          <Grid.Row style={{ height: "100px" }}></Grid.Row>
        </Grid>
      </Container>
    </div>
  );
};

export default ProfileComponent;
