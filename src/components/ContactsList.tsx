import * as React from "react";
import { graphql } from "relay-runtime";
import { useFragment, useRefetchableFragment } from "react-relay";
import type { ContactsListFragment$key } from "./__generated__/ContactsListFragment.graphql";
import Card from "./Card";
import ContactRow from "./ContactRow";
import SearchInput from "./SearchInput";

export type Props = {
  viewer: ContactsListFragment$key;
};

const ContactsListFragment = graphql`
  fragment ContactsListFragment on Viewer
    
   @argumentDefinitions(
    search: {type: "String", defaultValue: null}
   )
   @refetchable(queryName: "ContactsListRefetchQuery")
  {
    contacts(search: $search) {
      id
      ...ContactRowFragment
    }
  }
`;

export default function  ContactsList({ viewer }: Props) {
  const [data, refetch] = useRefetchableFragment(ContactsListFragment, viewer);
  const [searchString, setSearchString] = React.useState('');
  const onSearchStringChanged = (value: string) => {
    setSearchString(value);
    refetch({search: value})
  };
  return (
    <Card dim={true}>
      <h3>Contacts</h3>
      <SearchInput
        value={searchString}
        onChange={onSearchStringChanged}
      />
      {data.contacts.map((contact) => (
        <ContactRow key={contact.id} contact={contact} />
      ))}
    </Card>
  );
}
