import * as React from 'react';

export const SmilyButton = (props: { title?: string }) => (
    <button>
        😸{ props.title }
    </button>
);