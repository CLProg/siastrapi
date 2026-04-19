import type { Schema, Attribute } from '@strapi/strapi';

export interface BatchBatch extends Schema.Component {
  collectionName: 'components_batch_batches';
  info: {
    displayName: 'batch';
  };
  attributes: {
    batch_no: Attribute.String;
    expiration_date: Attribute.Date;
    stock: Attribute.Integer;
    is_expired: Attribute.Boolean;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'batch.batch': BatchBatch;
    }
  }
}
