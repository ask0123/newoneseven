# Generated by Django 4.2.17 on 2024-12-18 18:16

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('placement', '0001_initial'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='job',
            options={'managed': True, 'ordering': ['-created_at'], 'verbose_name': 'Job', 'verbose_name_plural': 'Jobs'},
        ),
        migrations.AddField(
            model_name='job',
            name='is_active',
            field=models.BooleanField(default=True),
        ),
        migrations.AddField(
            model_name='job',
            name='job_type',
            field=models.CharField(choices=[('FULL_TIME', 'Full Time'), ('PART_TIME', 'Part Time'), ('INTERNSHIP', 'Internship'), ('CONTRACT', 'Contract')], default='FULL_TIME', max_length=20),
        ),
        migrations.AddField(
            model_name='job',
            name='location',
            field=models.CharField(blank=True, max_length=100, null=True),
        ),
        migrations.AddField(
            model_name='job',
            name='salary_range',
            field=models.CharField(blank=True, max_length=100, null=True),
        ),
    ]
