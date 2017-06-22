import React, { Component } from 'react';



class Profile extends Component {
  // I need to rewrite the functions from ejs into react up here
  render() {

    return (
      <div class="container">

          <div class="page-header text-center">
              <h1><span class="fa fa-anchor"></span> Profile Page</h1>
              <a href="/logout" class="btn btn-default btn-sm">Logout</a>
          </div>

          <div class="row">

              {/* <!-- LOCAL INFORMATION --> */}
              <div class="col-sm-6">
                  <div class="well">
                      <h3><span class="fa fa-user"></span> Local</h3>

                       {/* <% if (user.local.email) { %>

                          <p>
                              <strong>id</strong>: <%= user._id %><br>
                              <strong>email</strong>: <%= user.local.email %><br>
                              <strong>password</strong>: <%= user.local.password %>
                          </p>

                          <a href="/unlink/local" class="btn btn-default">Unlink</a>
                     <% } else { %>
                         <a href="/connect/local" class="btn btn-default">Connect Local</a>
                     <% } %> */}

                  </div>
              </div>
              {/* <!-- FACEBOOK INFORMATION --> */}
              <div class="col-sm-6">
                  <div class="well">
                      <h3 class="text-primary"><span class="fa fa-facebook"></span> Facebook</h3>

                      {/* <!-- check if the user has this token (is the user authenticated with this social account) -->
                      <% if (user.facebook.token) { %>

                          <p>
                              <strong>id</strong>: <%= user.facebook.id %><br>
                              <strong>token</strong>: <%= user.facebook.token %><br>
                              <strong>email</strong>: <%= user.facebook.email %><br>
                              <strong>name</strong>: <%= user.facebook.name %>
                          </p>

                          <a href="/unlink/facebook" class="btn btn-primary">Unlink</a>
                      <% } else { %>
                          <a href="/connect/facebook" class="btn btn-primary">Connect Facebook</a>
                      <% } %> */}

                  </div>
              </div>
          </div>
          <div class="row">

              {/* <!-- TWITTER INFORMATION --> */}
              <div class="col-sm-6">
                  <div class="well">
                      <h3 class="text-info"><span class="fa fa-twitter"></span> Twitter</h3>

                      {/* <!-- check if the user has this token (is the user authenticated with this social account) -->
                      <% if (user.twitter.token) { %>

                          <p>
                              <strong>id</strong>: <%= user.twitter.id %><br>
                              <strong>token</strong>: <%= user.twitter.token %><br>
                              <strong>username</strong>: <%= user.twitter.username %><br>
                              <strong>displayName</strong>: <%= user.twitter.displayName %>
                          </p>

                          <a href="/unlink/twitter" class="btn btn-info">Unlink</a>
                      <% } else { %>
                          <a href="/connect/twitter" class="btn btn-info">Connect Twitter</a>
                      <% } %> */}

                  </div>
              </div>
              {/* <!-- GOOGLE INFORMATION --> */}
              <div class="col-sm-6">
                  <div class="well">
                      <h3 class="text-danger"><span class="fa fa-google-plus"></span> Google</h3>

                      {/* <!-- check if the user has this token (is the user authenticated with this social account) -->
                      <% if (user.google.token) { %>
                          <p>
                              <strong>id</strong>: <%= user.google.id %><br>
                              <strong>token</strong>: <%= user.google.token %><br>
                              <strong>email</strong>: <%= user.google.email %><br>
                              <strong>name</strong>: <%= user.google.name %>
                          </p>

                          <a href="/unlink/google" class="btn btn-danger">Unlink</a>
                      <% } else { %>
                          <a href="/connect/google" class="btn btn-danger">Connect Google</a>
                      <% } %> */}

                  </div>
              </div>

          </div>

      </div>

    )
  }
}

export default Profile;
