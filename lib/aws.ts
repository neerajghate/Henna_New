// AWS integration commented out for demo purposes
// import AWS from 'aws-sdk'

// Configure AWS
// AWS.config.update({
//   accessKeyId: process.env.AWS_ACCESS_KEY_ID,
//   secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
//   region: process.env.AWS_REGION || 'us-east-1'
// })

// Initialize AWS services
// export const s3 = new AWS.S3({
//   apiVersion: '2006-03-01'
// })

// export const ses = new AWS.SES({
//   apiVersion: '2010-12-01',
//   region: process.env.AWS_REGION || 'us-east-1'
// })

// Demo S3 Helper Functions
export const uploadToS3 = async (file: Buffer, key: string, contentType: string) => {
  // Demo implementation - simulate S3 upload
  console.log('Demo S3 upload:', { key, contentType, size: file.length })
  
  // Simulate upload delay
  await new Promise(resolve => setTimeout(resolve, 1000))
  
  return `https://demo-bucket.s3.amazonaws.com/${key}`
}

export const deleteFromS3 = async (key: string) => {
  // Demo implementation - simulate S3 deletion
  console.log('Demo S3 delete:', { key })
  
  // Simulate deletion delay
  await new Promise(resolve => setTimeout(resolve, 500))
  
  return true
}

// Demo SES Helper Functions
export const sendEmail = async (to: string, subject: string, htmlBody: string) => {
  // Demo implementation - simulate email sending
  console.log('Demo email sent:', { to, subject })
  
  // Simulate email sending delay
  await new Promise(resolve => setTimeout(resolve, 1000))
  
  return `demo-message-id-${Date.now()}`
}

export const sendContactFormEmail = async (formData: any) => {
  const htmlBody = `
    <h2>New Contact Form Submission</h2>
    <p><strong>Name:</strong> ${formData.name}</p>
    <p><strong>Email:</strong> ${formData.email}</p>
    <p><strong>Phone:</strong> ${formData.phone || 'Not provided'}</p>
    <p><strong>Service:</strong> ${formData.service}</p>
    <p><strong>Date:</strong> ${formData.date || 'Not specified'}</p>
    <p><strong>Message:</strong></p>
    <p>${formData.message}</p>
  `

  console.log('Demo contact form email:', formData)

  return sendEmail(
    'rita.sheth@example.com',
    `New Contact Form Submission from ${formData.name}`,
    htmlBody
  )
}
