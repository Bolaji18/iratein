# Generated by Django 4.0.6 on 2024-01-15 19:47

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('user', '0003_texts_add_sender_message_receiver_message_sender'),
    ]

    operations = [
        migrations.CreateModel(
            name='textsrecieved',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('content', models.TextField()),
                ('sender', models.CharField(max_length=800, null=True)),
                ('receiver', models.CharField(max_length=800, null=True)),
            ],
        ),
    ]
