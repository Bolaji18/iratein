# Generated by Django 4.0.6 on 2024-01-15 20:35

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('user', '0004_textsrecieved'),
    ]

    operations = [
        migrations.AddField(
            model_name='add',
            name='receiver',
            field=models.CharField(max_length=800, null=True),
        ),
    ]