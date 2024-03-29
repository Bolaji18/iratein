# Generated by Django 4.0.6 on 2024-01-15 19:44

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('user', '0002_add'),
    ]

    operations = [
        migrations.CreateModel(
            name='texts',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('content', models.TextField()),
                ('sender', models.CharField(max_length=800, null=True)),
                ('receiver', models.CharField(max_length=800, null=True)),
            ],
        ),
        migrations.AddField(
            model_name='add',
            name='sender',
            field=models.CharField(max_length=800, null=True),
        ),
        migrations.AddField(
            model_name='message',
            name='receiver',
            field=models.CharField(max_length=800, null=True),
        ),
        migrations.AddField(
            model_name='message',
            name='sender',
            field=models.CharField(max_length=800, null=True),
        ),
    ]
