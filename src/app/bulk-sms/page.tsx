import { getContacts } from '@/lib/data';
import { MainLayout } from '@/components/main-layout';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { BulkSmsClient } from '@/components/bulk-sms-client';

export const revalidate = 0; // Ensure dynamic rendering

export default async function BulkSmsPage() {
  const initialContacts = await getContacts();

  return (
    <MainLayout>
        <div className="flex flex-col gap-4">
            <Card>
                <CardHeader>
                    <CardTitle className="font-headline">Bulk SMS</CardTitle>
                    <CardDescription>Select recipients and send a message to all of them at once.</CardDescription>
                </CardHeader>
                <CardContent>
                    <BulkSmsClient initialContacts={initialContacts} />
                </CardContent>
            </Card>
        </div>
    </MainLayout>
  );
}
