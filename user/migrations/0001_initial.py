# Generated by Django 4.0.6 on 2024-01-13 10:09

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='message',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('username', models.CharField(max_length=800, verbose_name='username')),
                ('email', models.CharField(max_length=800, verbose_name='email')),
                ('content', models.TextField()),
                ('timestamp', models.DateTimeField(auto_now_add=True)),
                ('is_unread', models.BooleanField(default=True)),
            ],
        ),
    ]
