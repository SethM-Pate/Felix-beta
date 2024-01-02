import qrcode

# Replace this with your actual transaction hash
transaction_hash = "YOUR_TRANSACTION_HASH"

# URL for the transaction on Polygonscan
url = f"https://polygonscan.com/tx/{transaction_hash}"

qr = qrcode.QRCode(
    version=1,
    error_correction=qrcode.constants.ERROR_CORRECT_L,
    box_size=10,
    border=4,
)
qr.add_data(url)
qr.make(fit=True)

img = qr.make_image(fill_color="black", back_color="white")

# You can now save or display the image
# img.save("transaction_qr.png") or img.show()
