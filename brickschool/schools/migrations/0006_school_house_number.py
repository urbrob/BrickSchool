# Generated by Django 2.2.2 on 2019-09-29 09:05

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('schools', '0005_auto_20190929_0728'),
    ]

    operations = [
        migrations.AddField(
            model_name='school',
            name='house_number',
            field=models.CharField(max_length=10, null=True),
        ),
    ]
