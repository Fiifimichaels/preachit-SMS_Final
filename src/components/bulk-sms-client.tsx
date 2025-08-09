'use client';

import { useState, useEffect } from 'react';
import { collection, onSnapshot, query, orderBy } from 'firebase/firestore';
import { db } from '@/lib/firebase';
import { BulkSmsForm } from './bulk-sms-form';
import type { Contact } from '@/lib/data';

export function BulkSmsClient({ initialContacts }: { initialContacts: Contact[] }) {
    const [contacts, setContacts] = useState<Contact[]>(initialContacts);

    useEffect(() => {
        const q = query(collection(db, 'contacts'), orderBy('name'));
        const unsubscribe = onSnapshot(q, (querySnapshot) => {
            const contactsData: Contact[] = [];
            querySnapshot.forEach((doc) => {
                contactsData.push({ id: doc.id, ...doc.data() } as Contact);
            });
            setContacts(contactsData);
        });

        return () => unsubscribe();
    }, []);

    return <BulkSmsForm contacts={contacts} />;
}