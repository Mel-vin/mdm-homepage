import React from 'react';
import Head from 'next/head';

import "./style.css"

const DESC = "Melvin's Deathmatch - A new and upcoming deathmatch server, built from the ground up.";

export const HeadContent = ({ title }) => (
    <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=yes" />

        {/* Roboto Font */}
        <link href="https://fonts.googleapis.com/css?family=Open+Sans" rel="stylesheet" />

        {/* Bootstrap Stylesheet */}
        <link
            rel="stylesheet"
            href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
            integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
            crossorigin="anonymous"
        />

        {/* Bootstrap Scripts */}
        <script src="https://unpkg.com/react/umd/react.production.js" crossorigin />
        <script
            src="https://unpkg.com/react-dom/umd/react-dom.production.js"
            crossorigin
        />
        <script
            src="https://unpkg.com/react-bootstrap@next/dist/react-bootstrap.min.js"
            crossorigin
        />

        <title>Melvin's Deathmatch{title ? ` - ${title}` : ''}</title>
        <meta
            name="description"
            content={DESC}
        />

        <meta property="og:site_name" content="Melvin's Deathmatch" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="M:DM" />
        <meta property="og:url" content="https://melvinsdm.com" />
        <meta
            property="og:description"
            content={DESC}
        />

        <meta name="hostname" content="melvinsdm.com" />
        <meta name="expected-hostname" content="melvinsdm.com" />
        <meta name="google-site-verification" content="IKGIIryR9u_oWrqIH2uUJ5n9UVTWJGclHVWv-8niaeg" />
    </Head>
)