import { Document, Page, Text, View, StyleSheet, PDFViewer } from '@react-pdf/renderer';
import { format } from 'date-fns';

// Create styles
const styles = StyleSheet.create({
  page: {
    backgroundColor: '#FFF',
    padding: 30,
  },
  header: {
    marginBottom: 20,
    textAlign: 'center',
  },
  title: {
    fontSize: 24,
    color: '#C43670',
    marginBottom: 10,
    fontWeight: 'bold',
  },
  section: {
    margin: 10,
    padding: 20,
    backgroundColor: '#FFF5F9', // Light pink background
  },
  appointmentDetails: {
    backgroundColor: '#FFF0F7', // Slightly darker pink
    padding: 15,
    marginBottom: 20,
    borderRadius: 5,
  },
  detailsText: {
    fontSize: 12,
    marginBottom: 8,
    color: '#333',
  },
  instructionsTitle: {
    fontSize: 16,
    color: '#C43670',
    marginBottom: 10,
    fontWeight: 'bold',
  },
  instructionItem: {
    fontSize: 12,
    marginBottom: 5,
    color: '#333',
  },
  privacySection: {
    backgroundColor: '#F3E8FF', // Light purple
    padding: 15,
    marginTop: 20,
    borderRadius: 5,
  },
  privacyTitle: {
    fontSize: 16,
    color: '#7E22CE', // Purple
    marginBottom: 10,
    fontWeight: 'bold',
  },
  privacyText: {
    fontSize: 12,
    color: '#333',
  },
});

interface AppointmentPDFProps {
  date: string;
  time: string;
  email: string;
}

export const AppointmentPDF = ({ date, time, email }: AppointmentPDFProps) => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.header}>
        <Text style={styles.title}>Appointment Confirmation</Text>
      </View>

      <View style={styles.appointmentDetails}>
        <Text style={styles.detailsText}>
          Date: {date ? format(new Date(date), 'MMMM d, yyyy') : 'N/A'}
        </Text>
        <Text style={styles.detailsText}>Time: {time || 'N/A'}</Text>
        <Text style={styles.detailsText}>Email: {email || 'N/A'}</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.instructionsTitle}>Important Instructions:</Text>
        <Text style={styles.instructionItem}>• Please arrive 15 minutes before your scheduled appointment time</Text>
        <Text style={styles.instructionItem}>• Bring a valid form of identification</Text>
        <Text style={styles.instructionItem}>• No fasting is required for this test</Text>
        <Text style={styles.instructionItem}>• The test will take approximately 30 minutes</Text>
        <Text style={styles.instructionItem}>• Results will be available within 20-30 minutes</Text>
        <Text style={styles.instructionItem}>• Please wear a face mask during your visit</Text>
        <Text style={styles.instructionItem}>• If you feel unwell on the day, please reschedule your appointment</Text>
      </View>

      <View style={styles.privacySection}>
        <Text style={styles.privacyTitle}>Privacy Notice:</Text>
        <Text style={styles.privacyText}>
          Your privacy is important to us. All information and test results are kept strictly confidential. 
          Your email is only used for appointment confirmation and will not be shared with third parties.
        </Text>
      </View>
    </Page>
  </Document>
); 